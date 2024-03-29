SyntaxHighlighter.brushes.Ride = function () {
    var keywords = 'let strict if then else match case func nil FOLD as exactAs';

    var vars = 'height lastBlock this tx unit Buy Sell i'
        + ' CEILING FLOOR DOWN HALFDOWN HALFEVEN HALFUP UP NOALG MD5 SHA1 SHA224 SHA256 SHA384 SHA512 SHA3224 SHA3256 SHA3384 SHA3512';

    var typesV2 = 'Address Alias AssetPair Binary Boolean BurnTransaction ByteVector CreateAliasTransaction DataTransaction'
        + ' ExchangeTransaction GenesisTransaction Int IssueTransaction LeaseCancelTransaction LeaseTransaction'
        + ' MassTransferTransaction Order PaymentTransaction ReissueTransaction'
        + ' SetAssetScriptTransaction SetScriptTransaction SponsorFeeTransaction String'
        + ' Transaction Transfer TransferTransaction Unit';

    var typesV3 = 'Asset AttachedPayment BlockInfo DataEntry Invocation InvokeScriptTransaction'
        + ' List ScriptResult ScriptTransfer TransferSet WriteSet'
        + ' NoAlg Md5 Sha1 Sha224 Sha256 Sha384 Sha512 Sha3224 Sha3256 Sha3384 Sha3512'
        + ' Ceiling Down Floor HalfDown HalfEven HalfUp Up';

    var typesV4 = 'BinaryEntry BooleanEntry Burn DeleteEntry IntegerEntry Issue Reissue SponsorFee StringEntry UpdateAssetInfoTransaction BalanceDetails';

    var typesV5 = 'BigInt Lease LeaseCancel Any';

    var typesV6 = 'InvokeExpressionTransaction';

    var types = typesV2 + ' ' + typesV3 + ' ' + typesV4 + ' ' + typesV5 + ' ' + typesV6;

    var funcsV2 = 'addressFromPublicKey addressFromRecipient addressFromString addressFromStringValue assetBalance'
        + ' blake2b256 cons drop dropRight extract fraction fromBase58String fromBase64String'
        + ' getBinary getBinaryValue getBoolean getBooleanValue getElement getInteger getIntegerValue getString getStringValue'
        + ' isDefined keccak256 sha256 sigVerify size take takeRight throw toBase58String toBase64String toBytes toInt toString'
        + ' transactionHeightById wavesBalance';

    var funcsV3 = 'assetInfo blockInfoByHeight checkMerkleProof fromBase16String indexOf lastIndexOf log'
        + ' parseInt parseIntValue pow rsaVerify split toBase16String toInt toUtf8String transferTransactionById'
        + ' value valueOrErrorMessage';

    var blakeL = 'blake2b256_16Kb blake2b256_32Kb blake2b256_64Kb blake2b256_128Kb';
    var keccakL = 'keccak256_16Kb keccak256_32Kb keccak256_64Kb keccak256_128Kb';
    var shaL = 'sha256_16Kb sha256_32Kb sha256_64Kb sha256_128Kb';
    var sigVerifyL = 'sigVerify_16Kb sigVerify_32Kb sigVerify_64Kb sigVerify_128Kb';
    var rsaVerifyL = 'rsaVerify_16Kb rsaVerify_32Kb rsaVerify_64Kb rsaVerify_128Kb';
    var grothL = 'groth16Verify groth16Verify_1inputs groth16Verify_2inputs groth16Verify_3inputs groth16Verify_4inputs groth16Verify_5inputs'
        + ' groth16Verify_6inputs groth16Verify_7inputs groth16Verify_8inputs groth16Verify_9inputs groth16Verify_10inputs'
        + ' groth16Verify_11inputs groth16Verify_12inputs groth16Verify_13inputs groth16Verify_14inputs groth16Verify_15inputs';
    var bnGrothL = 'bn256Groth16Verify bn256Groth16Verify_1inputs bn256Groth16Verify_2inputs bn256Groth16Verify_3inputs bn256Groth16Verify_4inputs bn256Groth16Verify_5inputs'
        + ' bn256Groth16Verify_6inputs bn256Groth16Verify_7inputs bn256Groth16Verify_8inputs bn256Groth16Verify_9inputs bn256Groth16Verify_10inputs'
        + ' bn256Groth16Verify_11inputs bn256Groth16Verify_12inputs bn256Groth16Verify_13inputs bn256Groth16Verify_14inputs bn256Groth16Verify_15inputs';

    var funcsV4 = 'calculateAssetId contains containsElement createMerkleRoot median transferTransactionFromProto valueOrElse ecrecover makeString min max removeByIndex'
        + ' ' + blakeL + ' ' + keccakL + ' ' + shaL + ' ' + sigVerifyL + ' ' + rsaVerifyL + ' ' + grothL;

    var funcsV5 = 'invoke reentrantInvoke calculateLeaseId isDataStorageUntouched scriptHash toBigInt parseBigInt parseBigIntValue';

    var foldL = 'fold fold_20 fold_50 fold_100 fold_200 fold_500 fold_1000'

    var funcsV6 = 'sqrt' + ' ' + foldL;

    var funcs = funcsV2 + ' ' + funcsV3 + ' ' + funcsV4 + ' ' + funcsV5 + ' ' + funcsV6;

    SyntaxHighlighter.regexLib.directives = /\{-#\s*(STDLIB_VERSION|CONTENT_TYPE|SCRIPT_TYPE)\s+\S+\s*#-}/gm;
    SyntaxHighlighter.regexLib.annotations = /@(Callable|Verifier)/gm;
    SyntaxHighlighter.regexLib.byteVectors = /base(16|58|64)'.*'/gm;
    SyntaxHighlighter.regexLib.strings = /"[^"]*"/gm;

    this.regexList = [
        {regex: /#(.*)$/gm, css: 'comments'},
        {regex: SyntaxHighlighter.regexLib.directives, css: 'keyword'},
        {regex: SyntaxHighlighter.regexLib.annotations, css: 'color3'},
        {regex: SyntaxHighlighter.regexLib.strings, css: 'string'},
        {regex: SyntaxHighlighter.regexLib.byteVectors, css: 'color3'},
        {regex: new RegExp(this.getKeywords(keywords), 'gm'), css: 'keyword'},
        {regex: new RegExp(this.getKeywords(vars), 'gm'), css: 'keyword'},
        {regex: new RegExp(this.getKeywords(types), 'gm'), css: 'color3'},
        {regex: new RegExp(this.getKeywords(funcs), 'gm'), css: 'color2'}
    ];
};
SyntaxHighlighter.brushes.Ride.prototype = new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.Ride.aliases = ['ride'];
