export interface TransactionPayload {
    id?: number;
    destination_user_id: number;
    value: number;
    card_id: number;
}
