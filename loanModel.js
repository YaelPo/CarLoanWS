"use strict";
var loanModel = (function () {

    function loanModel(Id, FirstName, LastName, PhoneNumber, IdFile) {
        this.Id = Id;
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.PhoneNumber = PhoneNumber;
        this.IdFile = IdFile;
    }
    return loanModel;
}());
exports.loanModel = loanModel;
//# sourceMappingURL=customer.model.js.map
