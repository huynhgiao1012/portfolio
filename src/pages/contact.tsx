import { type FC, type ReactNode, useRef } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";

import emailjs from "@emailjs/browser";
import {
  CheckCircleIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { zodResolver } from "@hookform/resolvers/zod";
import { animated } from "@react-spring/web";
import Button from "@src/components/atoms/Button";
import Card from "@src/components/atoms/Card";
import Input from "@src/components/atoms/Input";
import SubTitle from "@src/components/atoms/SubTitle";
import TextArea from "@src/components/atoms/TextArea";
import Title from "@src/components/atoms/Title";
import { useChainAnimation } from "@src/hooks/useChainAnimation";
import { cn } from "@src/utils/common";

import "react-toastify/dist/ReactToastify.css";

interface Props {
  className?: string;
}
type ContactType = {
  label: string;
  icon: ReactNode;
};

const schema = z.object({
  name: z.string().trim().min(10, { message: "At least 10 characters" }),
  mail: z.string().trim().min(10, { message: "Mail is required" }).email(),
  message: z.string().trim().min(10, { message: "Please, leave me a message" }),
});

export type Schema = z.infer<typeof schema>;

const Contact: FC<Props> = ({ className = "" }) => {
  const form = useRef<HTMLFormElement>(null);
  const { register, formState, handleSubmit, reset } = useForm<Schema>({
    resolver: zodResolver(schema),
    mode: "onChange",
    reValidateMode: "onChange",
  });
  const { errors, isValid } = formState;

  const submit = () => {
    if (form.current && isValid) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID,
          process.env.NEXT_PUBLIC_TEMPLATE_ID,
          form.current,
          {
            publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
          }
        )
        .then(
          () => {
            toast.success("Success!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
    reset();
  };

  const CONTACT: ContactType[] = [
    {
      label: "Saigon, Vietnam",
      icon: <MapPinIcon />,
    },
    {
      label: "huynhgiaolethi@gmail.com",
      icon: <EnvelopeIcon />,
    },
    {
      label: "Freelance Available",
      icon: <CheckCircleIcon />,
    },
  ];
  const { transitions } = useChainAnimation([1], {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    trail: 750,
    delay: 500,
  });

  const { transitions: transition2 } = useChainAnimation([1], {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    trail: 750,
    delay: 1000,
  });

  return (
    <Card className={cn("motion-preset-expand overflow-auto", className)}>
      <Title title="Contact" description="Get in Touch" />
      <div className="grid grid-cols-1 gap-[1.875rem] sm:grid-cols-2">
        {transitions((style) => (
          <animated.div
            style={{
              ...style,
            }}
          >
            <div className="w-full">
              <SubTitle text="Get in Touch" />
              <p className="mb-2.5 text-justify text-[0.75rem] text-gray-100">
                If having any question, please contact me via the following
                information:
              </p>
              <ul className="flex flex-col gap-3">
                {CONTACT.map((item, index) => (
                  <li
                    key={index}
                    className={cn(
                      "flex items-center gap-2 text-white [&>svg]:size-[1.875rem]",
                      "text-[0.83rem] font-bold"
                    )}
                  >
                    {item.icon}
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>
          </animated.div>
        ))}
        {transition2((style) => (
          <animated.div
            style={{
              ...style,
            }}
          >
            <div className="mt-4 w-full sm:mt-0">
              <SubTitle text="Contact Form" />
              <form
                ref={form}
                onSubmit={handleSubmit(submit)}
                className={cn("mt-4 flex flex-col gap-5 xl:w-full", className)}
              >
                <Input
                  placeholder="Full Name"
                  type="name"
                  error={errors.name?.message}
                  {...register("name")}
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  error={errors.mail?.message}
                  {...register("mail")}
                />
                <TextArea
                  placeholder="Message For Me"
                  className="placeholder:not-italic"
                  error={errors.message?.message}
                  {...register("message")}
                />
                <Button
                  label="Send message"
                  type="submit"
                  className="w-[9.375rem] px-0"
                />
              </form>
            </div>
          </animated.div>
        ))}
      </div>
    </Card>
  );
};

export default Contact;
