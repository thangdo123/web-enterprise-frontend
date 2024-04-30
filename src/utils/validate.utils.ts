export function ValidatePassword(password: string) {
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password);
  const hasMinLength = password.length >= 8;

  return (
    hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar && hasMinLength
  );
}

export function CapsLockOn(e: React.KeyboardEvent<HTMLInputElement>) {
  if (e.getModifierState("CapsLock")) {
    return true;
  } else {
    return false;
  }
}
