const whatsAppNum = "85269338128"

const phoneNum = "+852 38925049"
const smallPhoneNum = "3892 5049"
const toWhatsApp = () =>{
  location.href = `https://wa.me/${whatsAppNum}?text=Hello愛康健,我想查詢牙科服務`
}
const whatsapplink = `https://wa.me/${whatsAppNum}?text=Hello愛康健,我想查詢牙科服務`

const toPhone = ()=>{
  location.href = `tel: ${phoneNum}`
}

export{
  whatsAppNum,
  phoneNum,
  smallPhoneNum,
  toWhatsApp,
  toPhone,
  whatsapplink
}