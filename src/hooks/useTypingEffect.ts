import { useEffect, useState } from "react";

export function useTypingEffect(
  words: string[],
  typingSpeed = 80,
  deletingSpeed = 45,
  pauseDuration = 2200,
) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (words.length === 0) return;

    const currentWord = words[wordIndex % words.length];
    const speed = isDeleting ? deletingSpeed : typingSpeed;

    const timeout = window.setTimeout(() => {
      if (!isDeleting) {
        const next = currentWord.slice(0, text.length + 1);
        setText(next);

        if (next === currentWord) {
          window.setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        const next = currentWord.slice(0, text.length - 1);
        setText(next);

        if (next === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, speed);

    return () => window.clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return text;
}
