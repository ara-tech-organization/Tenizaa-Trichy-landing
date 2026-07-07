const PHONE_REGEX = /^\d{10}$/

export function validateLeadForm(formData) {
  const phone = (formData.get('phone') || '').trim()

  if (!phone) return 'Mobile number is required.'
  if (!PHONE_REGEX.test(phone)) return 'Enter a valid 10-digit mobile number.'

  return ''
}
