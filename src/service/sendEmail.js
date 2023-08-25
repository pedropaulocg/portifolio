import emailJs from '@emailjs/browser'
import { Notify } from 'quasar'

export async function sendEmail (data) {
  const templateParams = {
    from_name: data.name,
    message: data.message,
    email: data.email,
    location: data.location
  }

  await emailJs.send('service_sesizk5', 'template_dqfsvw4', templateParams, 'k7iIVCQzWc4CqbJlK').then(res => {
    Notify.create({
      type: 'positive',
      progress: true,
      position: 'bottom',
      message: 'Email sent!',
      classes: 'text-body1',
      timeout: 3000,
      actions: [{
        icon: 'close',
        round: true,
        color: 'white'
      }]
    })
  }, (err) => {
    console.log(err)
  })
}
