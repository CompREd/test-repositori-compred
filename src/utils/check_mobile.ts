const checkMobile = () => {
  const mobileRegex = /(android|iphone|ipod|ipad|blackberry|windows phone)/i;
  const smallScreenRegex = /(all|small|handheld)/i;

  if (navigator.userAgent.match(mobileRegex) || navigator.userAgent.match(smallScreenRegex)) {
    return true;
  }

  const mediaQuery = window.matchMedia('(max-width: 1024px)');
  if (mediaQuery.matches) {
    return true;
  }

  return false;
};

export default checkMobile;
