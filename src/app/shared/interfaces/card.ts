export interface Card {
    id?: number;
    card_number: string;
    cvv: number;
    expiry_date: string;
    balance: number;
    spent: number;
    user_id: number;
}
