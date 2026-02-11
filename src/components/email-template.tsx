import React from 'react'

interface EmailTemplateProps {
    name: string
    email:string
    message:string
}
const EmailTemplate: React.FC<EmailTemplateProps> = ({name,email,message}) => {
  return (
    <div>
        <h1 className='pixel-font'>Mail from {name} via portfolio</h1>
        <h5>{message}</h5>
        <h6>Respond here: {email}</h6>
    </div>
  )
}

export default EmailTemplate