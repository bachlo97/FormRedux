export function Validator(value) {
  this.value = value;
  this.message = "";

  this.require = function (message) {
    // Nếu đã có lỗi thì return lại đối tượng, không xử lý validate những cái sau nữa.
    if (this.message) return this;

    if (this.value.trim().length === 0) {
      this.message = message || "Không được bỏ trống.";
    }

    return this;
  };

  // Chỉ bộ là ký tự chữ.
  this.string = function (message) {
    if (this.message) return this;

    var regexString =
      /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ ]+$/u;

    if (!regexString.test(this.value)) {
      this.message = message || "Yêu cầu toàn bộ là ký tự chữ.";
    }

    return this;
  };

  this.min = function (valueMin, message) {
    if (this.message) return this;
    if (this.value.trim().length < valueMin) {
      this.message = message || `Không được ít hơn ${valueMin} ký tự.`;
    }
    // }

    return this;
  };
  this.max = function (valueMax, message) {
    if (this.message) return this;


    if (this.value.trim().length > valueMax) {
      this.message = message || `Không được nhiều hơn ${valueMax} ký tự.`;
    }


    return this;
  };
  this.email = function (message) {
    if (this.message) return this;

    var regexEmail =
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

    if (!regexEmail.test(this.value)) {
      this.message = message || "Sai định dạng email.";
    }

    return this;
  };

  this.checkNumber = function (message = "Nhập vào 1 số nguyên dương") {
    if (this.message) return this;

    let regexSalary = /^[0-9]\d*$/

    if (!regexSalary.test(this.value)) {
      this.message = message;
    }
    return this;
  }

  // method: getter
  this.getMessage = function () {
    return this.message;
  };
}
