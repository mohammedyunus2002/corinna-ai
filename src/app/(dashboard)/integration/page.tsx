import { onGetPaymentConnected } from '@/actions/settings'
import InfoBar from '@/components/infobar'
import IntegrationsList from '@/components/integrations'

const IntegrationsPage = async () => {
  const payment = await onGetPaymentConnected()

  const connections = {
    stripe: payment ? true : false,
  }

  return (
    <>
      <InfoBar />
      <h1 className='text-black'>Currently Stripe Connect is not supported in India</h1>
      <IntegrationsList connections={connections} />
    </>
  )
}

export default IntegrationsPage