import { useState } from "react";
import {
  ArrowUpCircle,
  ArrowDownCircle,
  CreditCard,
  Download,
} from "lucide-react";
import { TRANSACTIONS } from "../../data/mockData";
import { formatCurrency, formatDate } from "../../utils/helpers";
import { useApp } from "../../context/AppContext";
import { updateWallet } from "../../store/actions";
import { eventBus, EVENTS } from "../../utils/eventBus";
import "./Wallet.css";

const RECHARGE_OPTIONS = [100000, 200000, 500000, 1000000, 2000000, 5000000];

export default function Wallet() {
  const { state, dispatch } = useApp();
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [showToast, setShowToast] = useState(false);

  const handleRecharge = () => {
    if (!selectedAmount) return;
    const newBalance = state.wallet.balance + selectedAmount;
    dispatch(updateWallet({ balance: newBalance }));
    // MFE Finanzas → Shell: notifica el nuevo saldo vía Event Bus
    // El Shell (Layout) escuchará este evento para actualizar el chip del header
    eventBus.emit(EVENTS.WALLET_BALANCE_UPDATED, { balance: newBalance });
    setSelectedAmount(null);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="wallet">
      {/* Balance + Recharge */}
      <div className="wallet__header-cards">
        <div className="wallet-balance">
          <div className="wallet-balance__label">Saldo Disponible</div>
          <div className="wallet-balance__amount">
            {formatCurrency(state.wallet.balance)}
          </div>
          <div style={{ fontSize: "var(--font-size-xs)", opacity: 0.7 }}>
            Los envíos se descuentan automáticamente de tu saldo.
          </div>
          <div className="wallet-balance__actions">
            <button className="btn btn--sm">
              <Download size={14} /> Descargar Factura
            </button>
          </div>
        </div>

        <div className="wallet-quick-recharge">
          <h3>
            <CreditCard
              size={18}
              style={{ verticalAlign: "middle", marginRight: 8 }}
            />
            Recarga Rápida
          </h3>
          <div className="recharge-amounts">
            {RECHARGE_OPTIONS.map((amount) => (
              <button
                key={amount}
                className={`recharge-btn ${selectedAmount === amount ? "recharge-btn--active" : ""}`}
                onClick={() => setSelectedAmount(amount)}
              >
                {formatCurrency(amount)}
              </button>
            ))}
          </div>
          <button
            className="btn btn--primary btn--full"
            disabled={!selectedAmount}
            onClick={handleRecharge}
          >
            Recargar {selectedAmount ? formatCurrency(selectedAmount) : ""}
          </button>
        </div>
      </div>

      {/* Transactions */}
      <div className="wallet__transactions">
        <div className="card__header">
          <h2 className="card__title">Historial de Transacciones</h2>
        </div>
        <ul className="txn-list">
          {TRANSACTIONS.map((txn) => (
            <li key={txn.id} className="txn-item">
              <div className={`txn-item__icon txn-item__icon--${txn.type}`}>
                {txn.type === "recharge" ? (
                  <ArrowUpCircle size={20} />
                ) : (
                  <ArrowDownCircle size={20} />
                )}
              </div>
              <div className="txn-item__info">
                <div className="txn-item__desc">{txn.description}</div>
                <div className="txn-item__date">
                  {formatDate(txn.date)} · {txn.id}
                </div>
              </div>
              <div
                className={`txn-item__amount ${txn.amount > 0 ? "txn-item__amount--positive" : "txn-item__amount--negative"}`}
              >
                {txn.amount > 0 ? "+" : ""}
                {formatCurrency(txn.amount)}
              </div>
              <span
                className="txn-item__status"
                style={{
                  background:
                    txn.status === "completed" ? "#d1fae5" : "#fef3c7",
                  color: txn.status === "completed" ? "#059669" : "#92400e",
                }}
              >
                {txn.status === "completed" ? "Completado" : "Pendiente"}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {showToast && (
        <div className="toast">
          ✅ Recarga exitosa — Nuevo saldo:{" "}
          {formatCurrency(state.wallet.balance)}
        </div>
      )}
    </div>
  );
}
