const PHONE_REGEX = /^\d{10}$/
const LETTERS_REGEX = /^[A-Za-z\s]+$/

export function validateLeadForm(formData) {
  const name = (formData.get('name') || '').trim()
  const phone = (formData.get('phone') || '').trim()
  const city = (formData.get('city') || '').trim()

  if (!name) return 'Name is required.'
  if (!LETTERS_REGEX.test(name)) return 'Name should contain only letters.'
  if (!phone) return 'Mobile number is required.'
  if (!PHONE_REGEX.test(phone)) return 'Enter a valid 10-digit mobile number.'
  if (!city) return 'City is required.'
  if (!LETTERS_REGEX.test(city)) return 'City should contain only letters.'

  return ''
}
