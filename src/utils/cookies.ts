export function setCookie(name: string, value: string, days: number = 7) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}= ${value}; expires=${expires.toUTCString()}`;
}

export function getCookie(name: string) {
  const cookieValue = document.cookie.match(
    "(^|;)\\s*" + name + "\\s*=\\s*([^;]+)",
  );
  return cookieValue ? decodeURIComponent(cookieValue.pop()!) : "";
}
