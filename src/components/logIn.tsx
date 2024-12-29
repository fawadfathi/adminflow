"use client";

import { login } from "@/lib/actions";
import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";

export default function LogIn() {
  const [state, loginAction] = useActionState(login, undefined);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const formEl = formRef.current;
    if (!formEl) return;

    if (formEl.matches(`[aria-invalid="true"]`)) {
      formEl.focus();
    } else {
      const firstInvalidField = formEl.querySelector(`[aria-invalid="true"]`);
      if (firstInvalidField instanceof HTMLElement) {
        firstInvalidField.focus();
      }
    }
  }, []);

  return (
    <form
      ref={formRef}
      tabIndex={-1}
      action={loginAction}
      className="space-y-7"
    >
      <div className="space-y-2">
        <div className="flex justify-center">
          <p className="text-2xl font-semibold">Log In</p>
        </div>
        <div>
          <p className="text-xs">
            Let&apos;s get Started with your 30 days free trail
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="space-x-5">
          <input
            id="email"
            name="email"
            placeholder="Email"
            required
            autoFocus
            className="pl-1 text-xs w-full max-w-7xl h-8 border"
          />
        </div>
        {state?.error?.email && (
          <p className="text-red-600 text-xs">{state.error.email}</p>
        )}

        <div className="space-x-5">
          <input
            required
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            className="pl-1 text-xs w-full max-w-7xl h-8 border"
          />
        </div>
        {state?.error?.password && (
          <div>
            <p className="text-xs">Password must:</p>
            <ul className="text-red-600 text-xs">
              {state.error.password.map((error) => (
                <li key={error}>- {error}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <SubmitButton />
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      type="submit"
      className="w-full max-w-7xl bg-violet-600 text-violet-100 p-2 rounded-md text-sm"
    >
      Log In
    </button>
  );
}
