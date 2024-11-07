import {
  forwardRef,
  type ForwardRefExoticComponent,
  type InputHTMLAttributes,
  type PropsWithoutRef,
  type RefAttributes,
  useEffect,
  useState,
} from "react";

import { cn } from "@src/utils/common";

type BaseProps = {
  error: string | undefined;
};
type Props = BaseProps & InputHTMLAttributes<HTMLTextAreaElement>;
const TextArea: ForwardRefExoticComponent<
  PropsWithoutRef<Props> & RefAttributes<HTMLTextAreaElement>
> = forwardRef(({ className = "", error, ...restProps }, ref) => {
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    setIsError(!!error);
  }, [error]);
  return (
    <div className="relative w-full">
      <div className={cn("group flex items-center")}>
        <textarea
          {...restProps}
          ref={ref}
          rows={4}
          className={cn(
            "peer size-full border border-gray-500 bg-transparent px-3 py-2.5",
            "text-[0.75rem] text-gray-50 outline-none placeholder:text-gray-50",
            "transition-all duration-300 ease-in-out",
            {
              "border border-red-400": isError,
            },
            className
          )}
        />
        <span className="absolute bottom-0 left-1/2 h-[0.0938rem] w-0 bg-orange-500 transition-all duration-300 ease-in-out peer-focus:w-1/2" />
        <span className="absolute bottom-0 right-1/2 h-[0.0938rem] w-0 bg-orange-500 transition-all duration-300 ease-in-out peer-focus:w-1/2" />
      </div>
      {isError && (
        <div className={cn("group absolute -bottom-3 left-2")}>
          <div>
            <div className="relative bg-red px-[0.3125rem] text-[0.625rem] text-white">
              {error}
              <div className="absolute -top-0.5 left-0.5 z-0 size-1.5 rotate-45 bg-red" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
});

export default TextArea;
