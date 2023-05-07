import { notFound } from 'next/navigation';

// temp fix for this issue:
// https://github.com/vercel/next.js/issues/48367
export default function ForceDynamicNotFound() {
  return notFound();
}

export const dynamic = 'force-dynamic';
