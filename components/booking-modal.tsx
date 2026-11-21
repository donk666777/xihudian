'use client';

import { FormEvent, useEffect, useRef, useState } from 'react';
import { useBooking } from './booking-context';

export function BookingModal() {
  const { isOpen, close } = useBooking();
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      triggerRef.current = document.activeElement as HTMLElement;
      setSubmitted(false);
      document.body.style.overflow = 'hidden';
      firstFieldRef.current?.focus();
    } else {
      document.body.style.overflow = '';
      triggerRef.current?.focus();
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [close, isOpen]);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <div className="modal open" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) close(); }}>
      <div className="modal-box" role="dialog" aria-modal="true" aria-labelledby="booking-title">
        <button className="close" type="button" onClick={close} aria-label="关闭预约窗口">×</button>
        <span className="eyebrow"><i /> Make a booking</span>
        <h2 id="booking-title">预约一次温柔洗护</h2>
        {submitted ? (
          <div className="success-message" role="status">
            <span className="success-icon">✓</span>
            <p>已收到，我们会尽快联系你。</p>
            <small>感谢你把毛孩子交给 MOMO。</small>
          </div>
        ) : (
          <form onSubmit={submit}>
            <div className="form-row"><label htmlFor="name">你的称呼</label><input ref={firstFieldRef} id="name" name="name" required placeholder="比如：小林" /></div>
            <div className="form-row"><label htmlFor="pet">毛孩子的名字</label><input id="pet" name="pet" required placeholder="比如：MOMO" /></div>
            <div className="form-row"><label htmlFor="time">希望到店时间</label><select id="time" name="time" defaultValue="今天 10:00 — 12:00"><option>今天 10:00 — 12:00</option><option>今天 14:00 — 16:00</option><option>明天 10:00 — 12:00</option><option>明天 14:00 — 16:00</option></select></div>
            <button className="button form-submit" type="submit">提交预约 <span className="arrow">↗</span></button>
          </form>
        )}
      </div>
    </div>
  );
}
