"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
test('É possível prover troco para todos os clientes - notas reaisEntrada', () => {
    const orderLemonade = new orderLemonade();
    const result = orderLemonade.provideExchange([
        { "bill_value": 20, "position_in_line": 3, "requested_lemonades": 2 },
        { "bill_value": 5, "position_in_line": 1, "requested_lemonades": 1 },
        { "bill_value": 5, "position_in_line": 2, "requested_lemonades": 1 }
    ]);
    expect(result).toStrictEqual(null);
});
test('É possível prover troco para todos os clientes - contém nota falsa', () => {
    const orderLemonade = new orderLemonade();
    const result = orderLemonade.provideExchange([
        { "bill_value": -10, "position_in_line": 3, "requested_lemonades": 2 },
        { "bill_value": 5, "position_in_line": 1, "requested_lemonades": 1 },
        { "bill_value": 5, "position_in_line": 2, "requested_lemonades": 1 }
    ]);
    expect(result).toStrictEqual(null);
});
