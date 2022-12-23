export interface CheckoutSessionResponse {
  sessionId: string;
  sessionUrl: string;
}

export interface CheckoutSessionRequest {
  productId: string;
  userId: number;
  quantity: number;
}