import { CheckMyStatus, 
         ContactForm,
         Header, 
         InformationServices } from '../components';

export const GncAppLayout = () => {
  return (
    <div className='bg-gradient-to-br from-black via-black to-yellow-600'>
       <div className='container mx-auto px-4'>
          <Header/>
          <CheckMyStatus/>
          <InformationServices/>
          <ContactForm/>
       </div>
    </div>

  )
}
