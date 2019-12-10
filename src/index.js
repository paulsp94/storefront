export default (options = {}) => {
  const { skipGtmScript, gtmContainerId } = options
  if (!skipGtmScript) {
    const $scripts = document.getElementsByTagName('script')
    const $lastScript = $scripts[$scripts.length - 1]
    if ($lastScript) {
      const $gtmScript = document.createElement('script')
      $gtmScript.text = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmContainerId}');`
      $lastScript.parentNode.insertBefore($gtmScript, $lastScript.nextSibling)
    }
  }
}
