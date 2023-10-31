const useGlobalLoader = () => {
  const loader: HTMLElement | null = document.getElementById('global-full-loader')

  const showLoader = () => {
    if (loader) {
      loader.classList.add('show')
    }
  }

  const hideLoader = () => {
    if (loader) {
      loader.classList.remove('show')
    }
  }

  return {
    showLoader,
    hideLoader,
  }
}

export default useGlobalLoader
