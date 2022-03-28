import { getUserVoucherDetail } from './services'

export const getUserVoucherHandler = () => {
  const detail = getUserVoucherDetail()
  return detail
}
