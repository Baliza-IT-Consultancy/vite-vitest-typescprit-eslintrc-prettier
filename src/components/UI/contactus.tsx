import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { IDispatch, IRootState } from "@/store/store";

export default function ContactUs() {
  const dispatch: IDispatch = useDispatch();
  const formState = useSelector((state: IRootState) => state.contactUsModel);

  function HandleSubmit() {
    dispatch.contactUsModel.ResetForm();
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <h1>persist form</h1>
      <input
        placeholder="name"
        value={formState.name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch.contactUsModel.HandleName(e.target.value)
        }
      />

      <input
        placeholder="phone"
        value={formState.phone}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch.contactUsModel.HandlePhone(e.target.value)
        }
      />
      <input
        placeholder="address"
        value={formState.address}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch.contactUsModel.HandleAddress(e.target.value)
        }
      />
      <input type={"button"} placeholder="submit" value={"submit"} onClick={HandleSubmit} />
    </div>
  );
}
