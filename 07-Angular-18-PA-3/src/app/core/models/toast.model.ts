export interface Toast {
  id: string;
  message: string;
  type?: 'info' | 'success' | 'warning' | 'error';
  duration?: number; // ms
}