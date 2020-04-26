export function checkCredentials(params) {
  if (
    // Should be improved: 
    // x || y is already a logical statement which results in boolean.
    // As such it might be directly returned instead of explictly returning true and false 
    params.userName.toLowerCase() !== 'student' ||
    params.password !== 'student'
  ) {
    return false
  }

  return true
}
