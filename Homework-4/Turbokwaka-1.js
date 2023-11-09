function VigenèreCipher(key, abc) {
    this.encode = function (str) {
        function fullSizeKey(){ // робимо key на всю довжину str
            let n = str.length / key.length;
            let fullKey = "";
            for (let i = 0; i < n; i++){
                fullKey += key;
            }
            return fullKey.slice(0, str.length);
        }
        let fullKey = fullSizeKey();
        let encoded = "";
        for (let i = 0; i < str.length; i++) {
            if (abc.includes(str[i])){
                let index = abc.indexOf(str[i]) + abc.indexOf(fullKey[i]);
                while (index >= abc.length) {
                    index -= abc.length;
                }
                encoded += abc[index];
            }
            else {
                encoded += str[i];
            }
        }
        return encoded;
    };
    this.decode = function (str) {
        function fullSizeKey(){ // робимо key на всю довжину str
            let n = str.length / key.length;
            let fullKey = "";
            for (let i = 0; i < n; i++){
                fullKey += key;
            }
            return fullKey.slice(0, str.length);
        }
        let fullKey = fullSizeKey();
        let decoded = "";
        for (let i = 0; i < str.length; i++) {
            if (abc.includes(str[i])){
                let index = abc.indexOf(str[i]) - abc.indexOf(fullKey[i]);
                while (index < 0) {
                    index += abc.length;
                }
                decoded += abc[index];
            }
            else {
                decoded += str[i];
            }
        }
        return decoded;
    };
}