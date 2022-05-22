class Utils {
    static getCurrency(amount, type, precision = 2) {
        if (!amount || isNaN(amount)) {
            amount = 0;
        }
        amount = Number(amount);
        let negativeSign = amount < 0 ? "- " : "";
        amount = Math.abs(amount);
        amount = amount.toFixed(precision);
        if (type && type !== null && type !== undefined) {
            let symbol = Utils.checkCurrencyType(type);
            if (type === "INR") {
                amount = (Number(amount)).toLocaleString("en-IN", {
                    maximumFractionDigits: 2,
                    minimumFractionDigits: 2
                }) //Utils.numberWithCommas(amount, precision)
                let amountValue = symbol + negativeSign + amount;
                return amountValue;
            }
            amount = Utils.numberWithCommasV1(amount, precision)
            let amountValue = negativeSign + symbol + amount;
            return amountValue;
        }
        let currencyType = "";
        if (
            currencyType === "" ||
            currencyType === undefined ||
            currencyType === null ||
            currencyType === "INR"
        ) {
            amount = (Number(amount)).toLocaleString("en-IN", {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2
            }) //Utils.numberWithCommas(amount, precision)
            return negativeSign+"\u20B9"+ amount;
        }
        let symbol = Utils.checkCurrencyType(currencyType);
        amount = Utils.numberWithCommas(amount, precision)
        return negativeSign + symbol + amount;
    }

    static checkCurrencyType(currencyType) {
        let searchResult = countryCurrency.search(currencyType);
        if (!currencyType || !searchResult || !searchResult[0].currency || !searchResult[0].currency.currencySymbol) {
            return '';
        }
        return searchResult[0].currency.currencySymbol;
    }
   
    static numberWithCommas(text, precision = 2) {
        let number = Number(text)
        if (text === null || text === undefined) {
            return 0;
        }
        try {
            text = parseFloat(text)
        } catch (e) {
            text = 0
        }
        if (isNaN(number) || number === undefined) {
            return 0.00
        }
        number = number.toFixed(precision)
        let fragments = number.split('.');
        if (fragments[1] === "00") {
            fragments[1] = ""
        } else if (fragments[1] != "00") {
            fragments[1] = "." + fragments[1]
        }
        return fragments[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + fragments[1]
    }

    static getTime (timestamp) {
        console.log(timestamp, 'gettime')
        if(!timestamp){
            return '-'
        }
        return new Date(timestamp).toLocaleTimeString('it-IT')

    }

    static getDate = (timestamp) => {
        if (!timestamp) {
            return;
        }
        var date = new Date(timestamp).getDate();
        var month = new Date(timestamp).getMonth() + 1;
        var year = new Date(timestamp).getFullYear();
        var fullDate = date + '-' + month + '-' + year;
        return fullDate;
    }
}

export default Utils;