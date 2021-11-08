/*Showing response to user */
export const showError = (error, message) => {
    if (error) return <div className='alert alert-danger'>{message}</div>
}

export const showSuccess = (success, message) => {
    if (success) return <div className='alert alert-success'>{message}</div>
}

export const showLoading = loading => {
    if (loading) return <div className='alert alert-info'>Loading...</div>
}