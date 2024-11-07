import type { FC, ReactNode } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  CheckCircleIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@src/components/atoms/Button";
import Card from "@src/components/atoms/Card";
import Input from "@src/components/atoms/Input";
import SubTitle from "@src/components/atoms/SubTitle";
import TextArea from "@src/components/atoms/TextArea";
import Title from "@src/components/atoms/Title";
import { cn } from "@src/utils/common";

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
  message: z.string().trim().min(50, { message: "Please, leave me a message" }),
});

export type Schema = z.infer<typeof schema>;

const Contact: FC<Props> = ({ className = "" }) => {
  const { register, formState, handleSubmit, reset } = useForm<Schema>({
    resolver: zodResolver(schema),
    mode: "onChange",
    reValidateMode: "onChange",
  });
  const submit = (data: Schema) => {
    console.log(data);
    reset();
  };
  const { errors } = formState;

  const CONTACT: ContactType[] = [
    {
      label: "Los Angeles, USA",
      icon: <MapPinIcon />,
    },
    {
      label: "alexsmith@example.com",
      icon: <EnvelopeIcon />,
    },
    {
      label: "123 654 78900",
      icon: <PhoneIcon />,
    },
    {
      label: "Freelance Available",
      icon: <CheckCircleIcon />,
    },
  ];

  return (
    <Card className={cn("motion-preset-expand", className)}>
      <Title title="Contact" description="Get in Touch" />
      <div className="grid grid-cols-1 gap-[1.875rem] sm:grid-cols-2">
        <div className="w-full">
          <SubTitle text="Get in Touch" />
          <p className="mb-2.5 text-justify text-[0.75rem] text-gray-100">
            Sed eleifend sed nibh nec fringilla. Donec eu cursus sem, vitae
            tristique ante. Cras pretium rutrum egestas. Integer ultrices libero
            sed justo vehicula, eget tincidunt tortor tempus.
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
        <div className="mt-4 w-full sm:mt-0">
          <SubTitle text="Contact Form" />
          <form
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
      </div>
    </Card>
  );
};

export default Contact;
