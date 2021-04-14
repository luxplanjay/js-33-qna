const isFilled = true;
const isSubmitting = false;
const hasErrors = false;
const isButtonDisabled = hasErrors || isSubmitting || !isFilled;
console.log('isButtonDisabled', isButtonDisabled);

const isFriend = true;
const isFriendOnline = true;
const canOpenChat = isFriend && isFriendOnline;
console.log('canOpenChat', canOpenChat);
