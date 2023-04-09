import cogoToast from "cogo-toast";

let EmailRegx = /\S+@\S+\.\S+/;
let MobileRegx = /^(?:\+?88|0088)?01[15-9]\d{8}$/;
let OnlyNumberRegx = /^\d+\.?\d*$/;
let OnlyLaterRegx = /^[A-Za-z\'\s\.\,\-\']+$/;
let NIDRegx = /^(\d{10}|\d{13}|\d{17})$/;
let BrithCirtificateRegx = /^(\d{17})$/;
let RepeatedRegx = /(.)\1{3,}/;
let validFileExtensions = ["jpg", "JPG", "jpeg", "JPEG", "PNG", "png"];
let validFileExtensionsETIN = ["jpg", "JPG", "jpeg", "JPEG", "PNG", "png"];
let validURL = /^(ftp|http|https|www):\/\/[^ "]+$/;
let TwoDecimal = /^\d*(\.\d{0,2})?$/;
let ContainsNumber = /\d/g;
let ContainsCapitalLetter = /[A-Z]/;
let ContainsSpecialCharacter = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

let URLRegx = /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/;

class FormHelper {
  IsURL(value) {
    if (URLRegx.test(value)) {
      return false;
    } else {
      return true;
    }
  }

  IsEmpty(value) {
    if (value.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  IsUndefined(value) {
    console.log(value);
    if (value === "undefined") {
      return true;
    } else {
      return false;
    }
  }

  IsNumber(value) {
    if (!OnlyNumberRegx.test(value)) {
      return false;
    } else {
      return true;
    }
  }

  IsEmail(value) {
    if (EmailRegx.test(value)) {
      return false;
    } else {
      return true;
    }
  }

  ErrorToast(msg) {
    cogoToast.error(msg, { position: "bottom-center" });
  }
  SuccessToast(msg) {
    cogoToast.success(msg, { position: "bottom-center" });
  }
  InfoToast(msg) {
    cogoToast.info(msg, { position: "bottom-center" });
  }

  async ErrorFocus(element) {
    try {
      element.focus();
      element.classList.add("form-error");
      let audio = new Audio("beep.wav");
      audio.volume = 0.2;
      await audio.play();
      setTimeout(() => {
        element.classList.remove("form-error");
      }, 1000);
    } catch (e) {
      let audio = new Audio("beep.wav");
      audio.volume = 0.2;
      await audio.play();
    }
  }
  ShowSubmitLoading(submitElement, LoadingElement) {
    submitElement.classList.add("d-none");
    LoadingElement.classList.remove("d-none");
  }

  HideSubmitLoading(submitElement, LoadingElement) {
    submitElement.classList.remove("d-none");
    LoadingElement.classList.add("d-none");
  }
}

export const {
  ErrorToast,
  SuccessToast,
  InfoToast,
  ErrorFocus,
  IsEmpty,
  IsEmail,
  ShowSubmitLoading,
  HideSubmitLoading,
  IsNumber,
  IsUndefined,
  IsURL
} = new FormHelper();
