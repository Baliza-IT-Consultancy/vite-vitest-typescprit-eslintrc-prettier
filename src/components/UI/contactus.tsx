import { motion } from "framer-motion";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { IDispatch, IRootState } from "@/store/store";

import Button from "./button";

export default function ContactUs() {
  const dispatch: IDispatch = useDispatch();
  const formState = useSelector((state: IRootState) => state.contactUsModel);

  function HandleSubmit() {
    dispatch.contactUsModel.ResetForm();
  }

  return (
    <motion.div layout style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <motion.h1
        style={{
          textTransform: "capitalize",
        }}
        initial={{
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            ease: "easeIn",
          },
        }}
      >
        persist form
      </motion.h1>
      <motion.input
        placeholder="name"
        value={formState.name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch.contactUsModel.HandleName(e.target.value)
        }
      />

      <motion.input
        placeholder="phone"
        value={formState.phone}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch.contactUsModel.HandlePhone(e.target.value)
        }
      />
      <motion.input
        placeholder="address"
        value={formState.address}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch.contactUsModel.HandleAddress(e.target.value)
        }
      />
      <Button onclick={HandleSubmit} label="submit" />
      {/* <input type={"button"} placeholder="submit" value={"submit"} onClick={HandleSubmit} /> */}
    </motion.div>
  );
}
