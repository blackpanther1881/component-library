import {
  forwardRef as originalForwardRef,
  ForwardRefExoticComponent,
  ForwardRefRenderFunction,
  PropsWithoutRef,
  RefAttributes,
} from "react";

export const forwardRef = <T, P>(
  render: ForwardRefRenderFunction<T, P>
): ForwardRefExoticComponent<
  Omit<PropsWithoutRef<P> & RefAttributes<T>, "css">
> => {
  // @ts-ignore
  return originalForwardRef<T, P>(render);
};
