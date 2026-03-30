export const PRODUCTS = [
  { id: 1, name: 'Lámpara LED Decorativa', category: 'Hogar', costPrice: 35000, suggestedPrice: 89900, margin: 61, stock: 142, shippingDays: '2-4', image: '💡', rating: 4.5 },
  { id: 2, name: 'Audífonos Bluetooth Pro', category: 'Tecnología', costPrice: 28000, suggestedPrice: 74900, margin: 63, stock: 87, shippingDays: '1-3', image: '🎧', rating: 4.7 },
  { id: 3, name: 'Organizador de Escritorio', category: 'Oficina', costPrice: 15000, suggestedPrice: 42900, margin: 65, stock: 210, shippingDays: '2-4', image: '📦', rating: 4.2 },
  { id: 4, name: 'Botella Térmica 500ml', category: 'Deportes', costPrice: 18000, suggestedPrice: 49900, margin: 64, stock: 330, shippingDays: '1-2', image: '🍶', rating: 4.8 },
  { id: 5, name: 'Soporte para Laptop', category: 'Tecnología', costPrice: 42000, suggestedPrice: 99900, margin: 58, stock: 64, shippingDays: '3-5', image: '💻', rating: 4.4 },
  { id: 6, name: 'Set de Brochas Maquillaje', category: 'Belleza', costPrice: 12000, suggestedPrice: 34900, margin: 66, stock: 405, shippingDays: '1-3', image: '💄', rating: 4.6 },
  { id: 7, name: 'Reloj Inteligente Sport', category: 'Tecnología', costPrice: 55000, suggestedPrice: 129900, margin: 58, stock: 52, shippingDays: '2-4', image: '⌚', rating: 4.3 },
  { id: 8, name: 'Cargador Inalámbrico', category: 'Tecnología', costPrice: 22000, suggestedPrice: 54900, margin: 60, stock: 178, shippingDays: '1-3', image: '🔋', rating: 4.5 },
  { id: 9, name: 'Almohada Cervical Memory', category: 'Hogar', costPrice: 25000, suggestedPrice: 64900, margin: 61, stock: 93, shippingDays: '2-4', image: '🛏️', rating: 4.7 },
  { id: 10, name: 'Mochila Antirrobo USB', category: 'Accesorios', costPrice: 48000, suggestedPrice: 119900, margin: 60, stock: 71, shippingDays: '3-5', image: '🎒', rating: 4.6 },
  { id: 11, name: 'Difusor de Aromas', category: 'Hogar', costPrice: 20000, suggestedPrice: 54900, margin: 64, stock: 156, shippingDays: '2-3', image: '🌸', rating: 4.4 },
  { id: 12, name: 'Funda Silicona Universal', category: 'Accesorios', costPrice: 5000, suggestedPrice: 19900, margin: 75, stock: 890, shippingDays: '1-2', image: '📱', rating: 4.1 },
]

export const CATEGORIES = ['Todos', 'Hogar', 'Tecnología', 'Oficina', 'Deportes', 'Belleza', 'Accesorios']

export const ORDERS = [
  { id: 'ORD-001', product: 'Lámpara LED Decorativa', buyer: 'María García', address: 'Cra 15 #82-30, Bogotá', phone: '300-123-4567', status: 'delivered', date: '2026-03-25', trackingCode: 'COL-789456', amount: 89900 },
  { id: 'ORD-002', product: 'Audífonos Bluetooth Pro', buyer: 'Juan Pérez', address: 'Calle 80 #50-12, Medellín', phone: '311-987-6543', status: 'in_transit', date: '2026-03-27', trackingCode: 'COL-321654', amount: 74900 },
  { id: 'ORD-003', product: 'Botella Térmica 500ml', buyer: 'Laura Torres', address: 'Av 6N #25-10, Cali', phone: '315-456-7890', status: 'processing', date: '2026-03-28', trackingCode: null, amount: 49900 },
  { id: 'ORD-004', product: 'Reloj Inteligente Sport', buyer: 'Andrés Ruiz', address: 'Calle 45 #12-34, Barranquilla', phone: '320-111-2233', status: 'pending', date: '2026-03-29', trackingCode: null, amount: 129900 },
  { id: 'ORD-005', product: 'Mochila Antirrobo USB', buyer: 'Sofía Herrera', address: 'Cra 7 #70-15, Bucaramanga', phone: '318-555-6677', status: 'delivered', date: '2026-03-22', trackingCode: 'COL-159753', amount: 119900 },
]

export const WAREHOUSE_ITEMS = [
  { id: 1, name: 'Lámpara LED Decorativa', sku: 'LAM-001', stock: 142, minStock: 30, location: 'A-12', pendingOrders: 5 },
  { id: 2, name: 'Audífonos Bluetooth Pro', sku: 'AUD-002', stock: 87, minStock: 20, location: 'B-03', pendingOrders: 8 },
  { id: 3, name: 'Organizador de Escritorio', sku: 'ORG-003', stock: 210, minStock: 50, location: 'C-07', pendingOrders: 2 },
  { id: 4, name: 'Botella Térmica 500ml', sku: 'BOT-004', stock: 330, minStock: 80, location: 'A-05', pendingOrders: 12 },
  { id: 5, name: 'Soporte para Laptop', sku: 'SOP-005', stock: 64, minStock: 15, location: 'D-01', pendingOrders: 3 },
  { id: 6, name: 'Set de Brochas Maquillaje', sku: 'BRO-006', stock: 405, minStock: 100, location: 'B-11', pendingOrders: 7 },
  { id: 7, name: 'Reloj Inteligente Sport', sku: 'REL-007', stock: 12, minStock: 15, location: 'D-09', pendingOrders: 6 },
  { id: 8, name: 'Cargador Inalámbrico', sku: 'CAR-008', stock: 178, minStock: 40, location: 'C-02', pendingOrders: 4 },
  { id: 9, name: 'Almohada Cervical Memory', sku: 'ALM-009', stock: 93, minStock: 25, location: 'A-08', pendingOrders: 1 },
  { id: 10, name: 'Mochila Antirrobo USB', sku: 'MOC-010', stock: 71, minStock: 20, location: 'B-06', pendingOrders: 3 },
]

export const TRANSACTIONS = [
  { id: 'TXN-001', type: 'recharge', amount: 500000, date: '2026-03-20', description: 'Recarga de saldo', status: 'completed' },
  { id: 'TXN-002', type: 'payment', amount: -89900, date: '2026-03-25', description: 'Pago Orden ORD-001', status: 'completed' },
  { id: 'TXN-003', type: 'payment', amount: -74900, date: '2026-03-27', description: 'Pago Orden ORD-002', status: 'completed' },
  { id: 'TXN-004', type: 'recharge', amount: 1000000, date: '2026-03-28', description: 'Recarga de saldo', status: 'completed' },
  { id: 'TXN-005', type: 'payment', amount: -49900, date: '2026-03-28', description: 'Pago Orden ORD-003', status: 'pending' },
]

export const ORDER_STATUSES = {
  pending: { label: 'Pendiente', color: '#f59e0b' },
  processing: { label: 'Procesando', color: '#6366f1' },
  in_transit: { label: 'En Tránsito', color: '#3b82f6' },
  delivered: { label: 'Entregado', color: '#10b981' },
  cancelled: { label: 'Cancelado', color: '#ef4444' },
}
