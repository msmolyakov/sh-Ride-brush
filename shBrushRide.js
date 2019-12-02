SyntaxHighlighter.brushes.Custom = function()
{
  var funcs       = 'extract value isDefined throw toBase58String fromBase58String parseInt log valueOrErrorMessage blake2b256'
                    + ' getBinary getBoolean getInteger getString getBinaryValue getBooleanValue getIntegerValue getStringValue'
                    + ' getElement fraction parseInt parseIntValue keccak256 size addressFromPublicKey takeRight take dropRight drop'
                    + ' toBase64String fromBase64String wavesBalance assetBalance indexOf lastIndexOf toBase16String fromBase16String'
                    + ' assetInfo sigVerify checkMerkleProof cons addressFromRecipient transactionHeightById sha256 pow blockInfoByHeight'
                    + ' toInt toBytes split addressFromStringValue toString toUtf8String rsaVerify addressFromString transferTransactionById';
​
  var keywords    = 'func let if then else match case'
                    + ' CEILING FLOOR DOWN HALFDOWN HALFEVEN HALFUP UP NOALG MD5 SHA1 SHA224 SHA256 SHA384 SHA512 SHA3224 SHA3256 SHA3384 SHA3512'
                    + ' this unit nil height lastBlock Buy Sell';
  var types       = 'Binary Boolean Int String List ScriptResult WriteSet TransferSet DataEntry ScriptTransfer Transfer'
                    + ' Alias AssetPair Address AttachedPayment Asset Invocation BlockInfo Order Unit'
                    + ' NoAlg Md5 Sha1 Sha224 Sha256 Sha384 Sha512 Sha3224 Sha3256 Sha3384 Sha3512'
                    + ' Ceiling Down Floor HalfDown HalfEven HalfUp Up'
                    + ' Transaction GenesisTransaction BurnTransaction InvokeScriptTransaction ReissueTransaction SetScriptTransaction'
                    + ' LeaseTransaction LeaseCancelTransaction CreateAliasTransaction ExchangeTransaction MassTransferTransaction'
                    + ' DataTransaction TransferTransaction IssueTransaction PaymentTransaction SponsorFeeTransaction SetAssetScriptTransaction';
 
  SyntaxHighlighter.regexLib.directives = /\{-#\s*(STDLIB_VERSION|CONTENT_TYPE|SCRIPT_TYPE)\s+\S+\s*#-\}/gm
  SyntaxHighlighter.regexLib.annotations = /@(Callable|Verifier)/gm
  SyntaxHighlighter.regexLib.byteVectors = /base(16|58|64)'.*'/gm
  SyntaxHighlighter.regexLib.strings = /"[^"]*"/gm
​
  this.regexList = [
      { regex: /#(.*)$/gm,                                   css: 'comments' },
      { regex: SyntaxHighlighter.regexLib.directives,        css: 'keyword' },
      { regex: SyntaxHighlighter.regexLib.annotations,       css: 'color3' },
      { regex: SyntaxHighlighter.regexLib.strings,           css: 'string' },
      { regex: SyntaxHighlighter.regexLib.byteVectors,       css: 'color3' },
      { regex: new RegExp(this.getKeywords(keywords), 'gm'), css: 'keyword' },
      { regex: new RegExp(this.getKeywords(types), 'gm'),    css: 'color1' },
      { regex: new RegExp(this.getKeywords(funcs), 'gm'),    css: 'color2' }
      ];
};
SyntaxHighlighter.brushes.Custom.prototype = new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.Custom.aliases  = ['ride', 'waves'];
