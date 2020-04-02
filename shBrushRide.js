;(function() {
    // CommonJS
    typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

    function Brush() {
        let keywords = 'case else FOLD func if let match nil then';

        let vars = 'height lastBlock this tx unit Buy Sell'
            + ' CEILING FLOOR DOWN HALFDOWN HALFEVEN HALFUP UP NOALG MD5 SHA1 SHA224 SHA256 SHA384 SHA512 SHA3224 SHA3256 SHA3384 SHA3512';

        let typesV2 = 'Address Alias AssetPair Binary Boolean BurnTransaction ByteVector CreateAliasTransaction DataTransaction'
            + ' ExchangeTransaction GenesisTransaction Int IssueTransaction LeaseCancelTransaction LeaseTransaction'
            + ' MassTransferTransaction Order PaymentTransaction ReissueTransaction'
            + ' SetAssetScriptTransaction SetScriptTransaction SponsorFeeTransaction String'
            + ' Transaction Transfer TransferTransaction Unit';

        let typesV3 = 'Asset AttachedPayment BlockInfo DataEntry Invocation InvokeScriptTransaction'
            + ' List ScriptResult ScriptTransfer TransferSet WriteSet'
            + ' NoAlg Md5 Sha1 Sha224 Sha256 Sha384 Sha512 Sha3224 Sha3256 Sha3384 Sha3512'
            + ' Ceiling Down Floor HalfDown HalfEven HalfUp Up';

        let typesV4 = 'BinaryEntry BooleanEntry Burn DeleteEntry IntegerEntry Issue Reissue StringEntry UpdateAssetInfoTransaction';

        let types = typesV2 + ' ' + typesV3 + ' ' + typesV4;

        let funcsV2 = 'addressFromPublicKey addressFromRecipient addressFromStringValue assetBalance'
            + ' blake2b256 cons drop dropRight extract fraction fromBase58String fromBase64String'
            + ' getBinary getBinaryValue getBoolean getBooleanValue getElement getInteger getIntegerValue getString getStringValue'
            + ' isDefined keccak256 sha256 sigVerify size take takeRight throw toBase58String toBase64String toBytes toInt toString'
            + ' transactionHeightById wavesBalance';

        let funcsV3 = 'assetInfo blockInfoByHeight checkMerkleProof fromBase16String indexOf lastIndexOf log'
            + ' parseInt parseIntValue pow rsaVerify split toBase16String toInt toUtf8String transferTransactionById'
            + ' value valueOrErrorMessage';

        let blakeL = 'blake2b256_16Kb blake2b256_32Kb blake2b256_64Kb blake2b256_128Kb';
        let keccakL = 'keccak256_16Kb keccak256_32Kb keccak256_64Kb keccak256_128Kb';
        let shaL = 'sha256_16Kb sha256_32Kb sha256_64Kb sha256_128Kb';
        let sigVerifyL = 'sigVerify_16Kb sigVerify_32Kb sigVerify_64Kb sigVerify_128Kb';
        let rsaVerifyL = 'rsaVerify_16Kb rsaVerify_32Kb rsaVerify_64Kb rsaVerify_128Kb';
        let grothL = 'groth16Verify_1inputs groth16Verify_2inputs groth16Verify_3inputs groth16Verify_4inputs groth16Verify_5inputs'
            + ' groth16Verify_6inputs groth16Verify_7inputs groth16Verify_8inputs groth16Verify_9inputs groth16Verify_10inputs'
            + ' groth16Verify_11inputs groth16Verify_12inputs groth16Verify_13inputs groth16Verify_14inputs groth16Verify_15inputs';

        let funcsV4 = 'calculateAssetId contains createMerkleRoot groth16Verify median transferTransactionFromProtoBytes valueOrElse'
            + ' ' + blakeL + ' ' + keccakL + ' ' + shaL + ' ' + sigVerifyL + ' ' + rsaVerifyL + ' ' + grothL;

        let funcs = funcsV2 + ' ' + funcsV3 + ' ' + funcsV4;

        let directives = /\{-#\s*(STDLIB_VERSION|CONTENT_TYPE|SCRIPT_TYPE)\s+\S+\s*#-}/gm;
        let annotations = /@(Callable|Verifier)/gm;
        let byteVectors = /base(16|58|64)'.*'/gm;
        let strings = /"[^"]*"/gm;

        let r = SyntaxHighlighter.regexLib;
​
        this.regexList = [
            {regex: /#(.*)$/gm, css: 'comments'},
            {regex: directives, css: 'keyword'},
            {regex: annotations, css: 'color3'},
            {regex: strings, css: 'string'},
            {regex: byteVectors, css: 'color3'},
            {regex: new RegExp(this.getKeywords(keywords), 'gm'), css: 'keyword'},
            {regex: new RegExp(this.getKeywords(vars), 'gm'), css: 'keyword'},
            {regex: new RegExp(this.getKeywords(types), 'gm'), css: 'color1'},
            {regex: new RegExp(this.getKeywords(funcs), 'gm'), css: 'color2'}
        ];

        this.forHtmlScript(r.scriptScriptTags);
    };

    Brush.prototype = new SyntaxHighlighter.Highlighter();
    Brush.aliases = ['ride'];

    SyntaxHighlighter.brushes.Ride = Brush;

    // CommonJS
    typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
