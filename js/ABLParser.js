// Generated from ABL.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('./lib/antlr4/index');
var ABLListener = require('./ABLListener').ABLListener;
var grammarFileName = "ABL.g4";

var serializedATN = ["\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\3O\u01ee\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4",
    "\t\t\t\4\n\t\n\4\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t",
    "\20\4\21\t\21\4\22\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27",
    "\t\27\4\30\t\30\4\31\t\31\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4",
    "\36\t\36\4\37\t\37\4 \t \4!\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t",
    "\'\4(\t(\4)\t)\4*\t*\4+\t+\4,\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t",
    "\61\4\62\t\62\4\63\t\63\4\64\t\64\4\65\t\65\3\2\5\2l\n\2\3\2\7\2o\n",
    "\2\f\2\16\2r\13\2\3\2\3\2\3\2\3\2\3\3\3\3\3\3\3\3\3\4\3\4\3\4\5\4\177",
    "\n\4\3\4\3\4\3\5\3\5\3\5\7\5\u0086\n\5\f\5\16\5\u0089\13\5\3\6\3\6\3",
    "\6\3\6\3\7\3\7\3\7\6\7\u0092\n\7\r\7\16\7\u0093\3\7\3\7\3\b\3\b\3\b",
    "\3\b\3\b\3\b\3\b\3\t\6\t\u00a0\n\t\r\t\16\t\u00a1\3\n\3\n\3\n\3\n\3",
    "\n\5\n\u00a9\n\n\3\13\3\13\5\13\u00ad\n\13\3\f\3\f\5\f\u00b1\n\f\3\f",
    "\3\f\7\f\u00b5\n\f\f\f\16\f\u00b8\13\f\3\f\3\f\3\r\3\r\5\r\u00be\n\r",
    "\3\r\5\r\u00c1\n\r\3\r\5\r\u00c4\n\r\3\16\3\16\3\16\3\16\3\16\3\16\3",
    "\16\3\16\3\17\3\17\3\17\3\17\7\17\u00d2\n\17\f\17\16\17\u00d5\13\17",
    "\3\17\3\17\3\20\3\20\3\20\3\20\5\20\u00dd\n\20\3\20\3\20\7\20\u00e1",
    "\n\20\f\20\16\20\u00e4\13\20\3\20\3\20\3\21\3\21\3\21\3\21\3\21\3\22",
    "\3\22\3\23\3\23\3\23\3\23\3\24\3\24\3\24\5\24\u00f6\n\24\3\24\5\24\u00f9",
    "\n\24\3\24\3\24\3\24\7\24\u00fe\n\24\f\24\16\24\u0101\13\24\3\24\3\24",
    "\3\25\5\25\u0106\n\25\3\25\3\25\3\25\3\25\5\25\u010c\n\25\3\26\5\26",
    "\u010f\n\26\3\26\3\26\3\26\3\27\3\27\3\27\3\27\5\27\u0118\n\27\3\30",
    "\3\30\3\31\3\31\3\31\3\31\7\31\u0120\n\31\f\31\16\31\u0123\13\31\3\32",
    "\3\32\3\32\3\32\3\33\3\33\3\33\6\33\u012c\n\33\r\33\16\33\u012d\3\33",
    "\3\33\3\34\3\34\3\35\3\35\3\35\3\36\3\36\3\36\3\37\3\37\3\37\3 \3 \3",
    " \3!\3!\3!\3\"\3\"\3\"\3\"\3#\3#\6#\u0149\n#\r#\16#\u014a\3$\3$\3$\3",
    "$\3%\3%\3%\3%\3%\3%\3%\5%\u0158\n%\3&\3&\3&\3\'\3\'\5\'\u015f\n\'\3",
    "(\3(\3(\3(\3)\3)\3)\3)\3)\3)\3)\3)\3)\3)\3)\3)\5)\u0171\n)\3*\3*\3*",
    "\3+\3+\3+\3+\3+\3,\5,\u017c\n,\3,\3,\3,\5,\u0181\n,\3,\3,\5,\u0185\n",
    ",\3,\3,\3-\3-\3-\3-\3-\7-\u018e\n-\f-\16-\u0191\13-\3-\3-\5-\u0195\n",
    "-\3-\3-\3-\5-\u019a\n-\3.\7.\u019d\n.\f.\16.\u01a0\13.\3.\3.\3.\3.\3",
    ".\3.\3.\3.\7.\u01aa\n.\f.\16.\u01ad\13.\3/\3/\3/\7/\u01b2\n/\f/\16/",
    "\u01b5\13/\3/\3/\3\60\3\60\3\60\3\60\3\61\3\61\3\61\3\61\3\61\5\61\u01c2",
    "\n\61\3\62\3\62\3\62\3\62\5\62\u01c8\n\62\3\62\5\62\u01cb\n\62\3\62",
    "\7\62\u01ce\n\62\f\62\16\62\u01d1\13\62\3\62\7\62\u01d4\n\62\f\62\16",
    "\62\u01d7\13\62\3\62\7\62\u01da\n\62\f\62\16\62\u01dd\13\62\3\62\3\62",
    "\3\62\3\63\3\63\3\64\3\64\3\64\7\64\u01e7\n\64\f\64\16\64\u01ea\13\64",
    "\3\65\3\65\3\65\2\2\66\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36 \"$&(",
    "*,.\60\62\64\668:<>@BDFHJLNPRTVXZ\\^`bdfh\2\13\3\2\65\66\3\2&,\3\2$",
    "%\3\2\34\35\3\2./\3\2\679\3\2AB\3\2DF\3\2=?\u0200\2k\3\2\2\2\4w\3\2",
    "\2\2\6{\3\2\2\2\b\u0087\3\2\2\2\n\u008a\3\2\2\2\f\u008e\3\2\2\2\16\u0097",
    "\3\2\2\2\20\u009f\3\2\2\2\22\u00a8\3\2\2\2\24\u00ac\3\2\2\2\26\u00ae",
    "\3\2\2\2\30\u00c3\3\2\2\2\32\u00c5\3\2\2\2\34\u00cd\3\2\2\2\36\u00d8",
    "\3\2\2\2 \u00e7\3\2\2\2\"\u00ec\3\2\2\2$\u00ee\3\2\2\2&\u00f5\3\2\2",
    "\2(\u0105\3\2\2\2*\u010e\3\2\2\2,\u0117\3\2\2\2.\u0119\3\2\2\2\60\u011b",
    "\3\2\2\2\62\u0124\3\2\2\2\64\u0128\3\2\2\2\66\u0131\3\2\2\28\u0133\3",
    "\2\2\2:\u0136\3\2\2\2<\u0139\3\2\2\2>\u013c\3\2\2\2@\u013f\3\2\2\2B",
    "\u0142\3\2\2\2D\u0146\3\2\2\2F\u014c\3\2\2\2H\u0157\3\2\2\2J\u0159\3",
    "\2\2\2L\u015c\3\2\2\2N\u0160\3\2\2\2P\u0170\3\2\2\2R\u0172\3\2\2\2T",
    "\u0175\3\2\2\2V\u017b\3\2\2\2X\u0194\3\2\2\2Z\u019e\3\2\2\2\\\u01ae",
    "\3\2\2\2^\u01b8\3\2\2\2`\u01c1\3\2\2\2b\u01c3\3\2\2\2d\u01e1\3\2\2\2",
    "f\u01e3\3\2\2\2h\u01eb\3\2\2\2jl\5\4\3\2kj\3\2\2\2kl\3\2\2\2lp\3\2\2",
    "\2mo\5\6\4\2nm\3\2\2\2or\3\2\2\2pn\3\2\2\2pq\3\2\2\2qs\3\2\2\2rp\3\2",
    "\2\2st\5\b\5\2tu\5b\62\2uv\7\2\2\3v\3\3\2\2\2wx\7\3\2\2xy\7J\2\2yz\7",
    "\4\2\2z\5\3\2\2\2{|\7\5\2\2|~\7J\2\2}\177\7G\2\2~}\3\2\2\2~\177\3\2",
    "\2\2\177\u0080\3\2\2\2\u0080\u0081\7\4\2\2\u0081\7\3\2\2\2\u0082\u0083",
    "\7\6\2\2\u0083\u0084\7J\2\2\u0084\u0086\7\4\2\2\u0085\u0082\3\2\2\2",
    "\u0086\u0089\3\2\2\2\u0087\u0085\3\2\2\2\u0087\u0088\3\2\2\2\u0088\t",
    "\3\2\2\2\u0089\u0087\3\2\2\2\u008a\u008b\7C\2\2\u008b\u008c\t\2\2\2",
    "\u008c\u008d\7\4\2\2\u008d\13\3\2\2\2\u008e\u008f\7\7\2\2\u008f\u0091",
    "\5d\63\2\u0090\u0092\5d\63\2\u0091\u0090\3\2\2\2\u0092\u0093\3\2\2\2",
    "\u0093\u0091\3\2\2\2\u0093\u0094\3\2\2\2\u0094\u0095\3\2\2\2\u0095\u0096",
    "\7\4\2\2\u0096\r\3\2\2\2\u0097\u0098\7\b\2\2\u0098\u0099\7\t\2\2\u0099",
    "\u009a\7J\2\2\u009a\u009b\7\n\2\2\u009b\u009c\7J\2\2\u009c\u009d\7\4",
    "\2\2\u009d\17\3\2\2\2\u009e\u00a0\5\16\b\2\u009f\u009e\3\2\2\2\u00a0",
    "\u00a1\3\2\2\2\u00a1\u009f\3\2\2\2\u00a1\u00a2\3\2\2\2\u00a2\21\3\2",
    "\2\2\u00a3\u00a9\7M\2\2\u00a4\u00a9\7L\2\2\u00a5\u00a9\5h\65\2\u00a6",
    "\u00a9\7H\2\2\u00a7\u00a9\7I\2\2\u00a8\u00a3\3\2\2\2\u00a8\u00a4\3\2",
    "\2\2\u00a8\u00a5\3\2\2\2\u00a8\u00a6\3\2\2\2\u00a8\u00a7\3\2\2\2\u00a9",
    "\23\3\2\2\2\u00aa\u00ad\5d\63\2\u00ab\u00ad\5\22\n\2\u00ac\u00aa\3\2",
    "\2\2\u00ac\u00ab\3\2\2\2\u00ad\25\3\2\2\2\u00ae\u00b0\7\13\2\2\u00af",
    "\u00b1\5\30\r\2\u00b0\u00af\3\2\2\2\u00b0\u00b1\3\2\2\2\u00b1\u00b6",
    "\3\2\2\2\u00b2\u00b3\7\f\2\2\u00b3\u00b5\5\30\r\2\u00b4\u00b2\3\2\2",
    "\2\u00b5\u00b8\3\2\2\2\u00b6\u00b4\3\2\2\2\u00b6\u00b7\3\2\2\2\u00b7",
    "\u00b9\3\2\2\2\u00b8\u00b6\3\2\2\2\u00b9\u00ba\7\r\2\2\u00ba\27\3\2",
    "\2\2\u00bb\u00bd\7J\2\2\u00bc\u00be\5\24\13\2\u00bd\u00bc\3\2\2\2\u00bd",
    "\u00be\3\2\2\2\u00be\u00c4\3\2\2\2\u00bf\u00c1\7J\2\2\u00c0\u00bf\3",
    "\2\2\2\u00c0\u00c1\3\2\2\2\u00c1\u00c2\3\2\2\2\u00c2\u00c4\5\24\13\2",
    "\u00c3\u00bb\3\2\2\2\u00c3\u00c0\3\2\2\2\u00c4\31\3\2\2\2\u00c5\u00c6",
    "\7\b\2\2\u00c6\u00c7\7\16\2\2\u00c7\u00c8\7J\2\2\u00c8\u00c9\5\26\f",
    "\2\u00c9\u00ca\7\n\2\2\u00ca\u00cb\7J\2\2\u00cb\u00cc\7\4\2\2\u00cc",
    "\33\3\2\2\2\u00cd\u00ce\7J\2\2\u00ce\u00d3\5d\63\2\u00cf\u00d0\7\f\2",
    "\2\u00d0\u00d2\5d\63\2\u00d1\u00cf\3\2\2\2\u00d2\u00d5\3\2\2\2\u00d3",
    "\u00d1\3\2\2\2\u00d3\u00d4\3\2\2\2\u00d4\u00d6\3\2\2\2\u00d5\u00d3\3",
    "\2\2\2\u00d6\u00d7\7\4\2\2\u00d7\35\3\2\2\2\u00d8\u00d9\7\t\2\2\u00d9",
    "\u00dc\7J\2\2\u00da\u00db\7\17\2\2\u00db\u00dd\7J\2\2\u00dc\u00da\3",
    "\2\2\2\u00dc\u00dd\3\2\2\2\u00dd\u00de\3\2\2\2\u00de\u00e2\7\20\2\2",
    "\u00df\u00e1\5\34\17\2\u00e0\u00df\3\2\2\2\u00e1\u00e4\3\2\2\2\u00e2",
    "\u00e0\3\2\2\2\u00e2\u00e3\3\2\2\2\u00e3\u00e5\3\2\2\2\u00e4\u00e2\3",
    "\2\2\2\u00e5\u00e6\7\21\2\2\u00e6\37\3\2\2\2\u00e7\u00e8\7\22\2\2\u00e8",
    "\u00e9\7J\2\2\u00e9\u00ea\5d\63\2\u00ea\u00eb\7\4\2\2\u00eb!\3\2\2\2",
    "\u00ec\u00ed\t\3\2\2\u00ed#\3\2\2\2\u00ee\u00ef\5d\63\2\u00ef\u00f0",
    "\5\"\22\2\u00f0\u00f1\5\24\13\2\u00f1%\3\2\2\2\u00f2\u00f3\5d\63\2\u00f3",
    "\u00f4\7\23\2\2\u00f4\u00f6\3\2\2\2\u00f5\u00f2\3\2\2\2\u00f5\u00f6",
    "\3\2\2\2\u00f6\u00f8\3\2\2\2\u00f7\u00f9\7-\2\2\u00f8\u00f7\3\2\2\2",
    "\u00f8\u00f9\3\2\2\2\u00f9\u00fa\3\2\2\2\u00fa\u00fb\7\13\2\2\u00fb",
    "\u00ff\7J\2\2\u00fc\u00fe\5$\23\2\u00fd\u00fc\3\2\2\2\u00fe\u0101\3",
    "\2\2\2\u00ff\u00fd\3\2\2\2\u00ff\u0100\3\2\2\2\u0100\u0102\3\2\2\2\u0101",
    "\u00ff\3\2\2\2\u0102\u0103\7\r\2\2\u0103\'\3\2\2\2\u0104\u0106\7-\2",
    "\2\u0105\u0104\3\2\2\2\u0105\u0106\3\2\2\2\u0106\u0107\3\2\2\2\u0107",
    "\u010b\5\24\13\2\u0108\u0109\5\"\22\2\u0109\u010a\5\24\13\2\u010a\u010c",
    "\3\2\2\2\u010b\u0108\3\2\2\2\u010b\u010c\3\2\2\2\u010c)\3\2\2\2\u010d",
    "\u010f\7-\2\2\u010e\u010d\3\2\2\2\u010e\u010f\3\2\2\2\u010f\u0110\3",
    "\2\2\2\u0110\u0111\5d\63\2\u0111\u0112\5\26\f\2\u0112+\3\2\2\2\u0113",
    "\u0118\7H\2\2\u0114\u0118\5d\63\2\u0115\u0118\5*\26\2\u0116\u0118\5",
    "(\25\2\u0117\u0113\3\2\2\2\u0117\u0114\3\2\2\2\u0117\u0115\3\2\2\2\u0117",
    "\u0116\3\2\2\2\u0118-\3\2\2\2\u0119\u011a\t\4\2\2\u011a/\3\2\2\2\u011b",
    "\u0121\5,\27\2\u011c\u011d\5.\30\2\u011d\u011e\5,\27\2\u011e\u0120\3",
    "\2\2\2\u011f\u011c\3\2\2\2\u0120\u0123\3\2\2\2\u0121\u011f\3\2\2\2\u0121",
    "\u0122\3\2\2\2\u0122\61\3\2\2\2\u0123\u0121\3\2\2\2\u0124\u0125\7\13",
    "\2\2\u0125\u0126\5\60\31\2\u0126\u0127\7\r\2\2\u0127\63\3\2\2\2\u0128",
    "\u012b\7\20\2\2\u0129\u012c\5&\24\2\u012a\u012c\5\62\32\2\u012b\u0129",
    "\3\2\2\2\u012b\u012a\3\2\2\2\u012c\u012d\3\2\2\2\u012d\u012b\3\2\2\2",
    "\u012d\u012e\3\2\2\2\u012e\u012f\3\2\2\2\u012f\u0130\7\21\2\2\u0130",
    "\65\3\2\2\2\u0131\u0132\5\64\33\2\u0132\67\3\2\2\2\u0133\u0134\7\24",
    "\2\2\u0134\u0135\5\66\34\2\u01359\3\2\2\2\u0136\u0137\7\25\2\2\u0137",
    "\u0138\5\66\34\2\u0138;\3\2\2\2\u0139\u013a\7\26\2\2\u013a\u013b\5\66",
    "\34\2\u013b=\3\2\2\2\u013c\u013d\7\27\2\2\u013d\u013e\5\66\34\2\u013e",
    "?\3\2\2\2\u013f\u0140\7\30\2\2\u0140\u0141\5\66\34\2\u0141A\3\2\2\2",
    "\u0142\u0143\7\31\2\2\u0143\u0144\5\22\n\2\u0144\u0145\7\4\2\2\u0145",
    "C\3\2\2\2\u0146\u0148\7\32\2\2\u0147\u0149\5d\63\2\u0148\u0147\3\2\2",
    "\2\u0149\u014a\3\2\2\2\u014a\u0148\3\2\2\2\u014a\u014b\3\2\2\2\u014b",
    "E\3\2\2\2\u014c\u014d\7\33\2\2\u014d\u014e\5\22\n\2\u014e\u014f\7\4",
    "\2\2\u014fG\3\2\2\2\u0150\u0158\58\35\2\u0151\u0158\5F$\2\u0152\u0158",
    "\5:\36\2\u0153\u0158\5<\37\2\u0154\u0158\5B\"\2\u0155\u0158\5D#\2\u0156",
    "\u0158\5> \2\u0157\u0150\3\2\2\2\u0157\u0151\3\2\2\2\u0157\u0152\3\2",
    "\2\2\u0157\u0153\3\2\2\2\u0157\u0154\3\2\2\2\u0157\u0155\3\2\2\2\u0157",
    "\u0156\3\2\2\2\u0158I\3\2\2\2\u0159\u015a\t\5\2\2\u015a\u015b\5\22\n",
    "\2\u015bK\3\2\2\2\u015c\u015e\7\36\2\2\u015d\u015f\t\6\2\2\u015e\u015d",
    "\3\2\2\2\u015e\u015f\3\2\2\2\u015fM\3\2\2\2\u0160\u0161\7\22\2\2\u0161",
    "\u0162\5d\63\2\u0162\u0163\5\24\13\2\u0163O\3\2\2\2\u0164\u0171\7\60",
    "\2\2\u0165\u0171\7\61\2\2\u0166\u0171\7\62\2\2\u0167\u0171\7\63\2\2",
    "\u0168\u0169\7\64\2\2\u0169\u0171\5d\63\2\u016a\u0171\7\65\2\2\u016b",
    "\u0171\7\66\2\2\u016c\u0171\5J&\2\u016d\u0171\5L\'\2\u016e\u0171\5N",
    "(\2\u016f\u0171\5@!\2\u0170\u0164\3\2\2\2\u0170\u0165\3\2\2\2\u0170",
    "\u0166\3\2\2\2\u0170\u0167\3\2\2\2\u0170\u0168\3\2\2\2\u0170\u016a\3",
    "\2\2\2\u0170\u016b\3\2\2\2\u0170\u016c\3\2\2\2\u0170\u016d\3\2\2\2\u0170",
    "\u016e\3\2\2\2\u0170\u016f\3\2\2\2\u0171Q\3\2\2\2\u0172\u0173\t\7\2",
    "\2\u0173\u0174\7\4\2\2\u0174S\3\2\2\2\u0175\u0176\7\37\2\2\u0176\u0177",
    "\5d\63\2\u0177\u0178\5\26\f\2\u0178\u0179\7\4\2\2\u0179U\3\2\2\2\u017a",
    "\u017c\7D\2\2\u017b\u017a\3\2\2\2\u017b\u017c\3\2\2\2\u017c\u017d\3",
    "\2\2\2\u017d\u017e\t\b\2\2\u017e\u0180\5d\63\2\u017f\u0181\5\26\f\2",
    "\u0180\u017f\3\2\2\2\u0180\u0181\3\2\2\2\u0181\u0184\3\2\2\2\u0182\u0183",
    "\7 \2\2\u0183\u0185\5d\63\2\u0184\u0182\3\2\2\2\u0184\u0185\3\2\2\2",
    "\u0185\u0186\3\2\2\2\u0186\u0187\7\4\2\2\u0187W\3\2\2\2\u0188\u0189",
    "\7\n\2\2\u0189\u018a\7\13\2\2\u018a\u018f\5P)\2\u018b\u018c\7\f\2\2",
    "\u018c\u018e\5P)\2\u018d\u018b\3\2\2\2\u018e\u0191\3\2\2\2\u018f\u018d",
    "\3\2\2\2\u018f\u0190\3\2\2\2\u0190\u0192\3\2\2\2\u0191\u018f\3\2\2\2",
    "\u0192\u0193\7\r\2\2\u0193\u0195\3\2\2\2\u0194\u0188\3\2\2\2\u0194\u0195",
    "\3\2\2\2\u0195\u0199\3\2\2\2\u0196\u019a\5V,\2\u0197\u019a\5T+\2\u0198",
    "\u019a\5R*\2\u0199\u0196\3\2\2\2\u0199\u0197\3\2\2\2\u0199\u0198\3\2",
    "\2\2\u019aY\3\2\2\2\u019b\u019d\t\t\2\2\u019c\u019b\3\2\2\2\u019d\u01a0",
    "\3\2\2\2\u019e\u019c\3\2\2\2\u019e\u019f\3\2\2\2\u019f\u01a1\3\2\2\2",
    "\u01a0\u019e\3\2\2\2\u01a1\u01a2\t\n\2\2\u01a2\u01a3\7@\2\2\u01a3\u01a4",
    "\5d\63\2\u01a4\u01a5\5\26\f\2\u01a5\u01ab\7\20\2\2\u01a6\u01aa\5H%\2",
    "\u01a7\u01aa\5\34\17\2\u01a8\u01aa\5X-\2\u01a9\u01a6\3\2\2\2\u01a9\u01a7",
    "\3\2\2\2\u01a9\u01a8\3\2\2\2\u01aa\u01ad\3\2\2\2\u01ab\u01a9\3\2\2\2",
    "\u01ab\u01ac\3\2\2\2\u01ac[\3\2\2\2\u01ad\u01ab\3\2\2\2\u01ae\u01af",
    "\7!\2\2\u01af\u01b3\7\20\2\2\u01b0\u01b2\5X-\2\u01b1\u01b0\3\2\2\2\u01b2",
    "\u01b5\3\2\2\2\u01b3\u01b1\3\2\2\2\u01b3\u01b4\3\2\2\2\u01b4\u01b6\3",
    "\2\2\2\u01b5\u01b3\3\2\2\2\u01b6\u01b7\7\21\2\2\u01b7]\3\2\2\2\u01b8",
    "\u01b9\7\"\2\2\u01b9\u01ba\5d\63\2\u01ba\u01bb\7\4\2\2\u01bb_\3\2\2",
    "\2\u01bc\u01c2\5\16\b\2\u01bd\u01c2\5\32\16\2\u01be\u01c2\5\36\20\2",
    "\u01bf\u01c2\5 \21\2\u01c0\u01c2\5\34\17\2\u01c1\u01bc\3\2\2\2\u01c1",
    "\u01bd\3\2\2\2\u01c1\u01be\3\2\2\2\u01c1\u01bf\3\2\2\2\u01c1\u01c0\3",
    "\2\2\2\u01c2a\3\2\2\2\u01c3\u01c4\7#\2\2\u01c4\u01c5\5d\63\2\u01c5\u01c7",
    "\7\20\2\2\u01c6\u01c8\5\n\6\2\u01c7\u01c6\3\2\2\2\u01c7\u01c8\3\2\2",
    "\2\u01c8\u01ca\3\2\2\2\u01c9\u01cb\5^\60\2\u01ca\u01c9\3\2\2\2\u01ca",
    "\u01cb\3\2\2\2\u01cb\u01cf\3\2\2\2\u01cc\u01ce\5\f\7\2\u01cd\u01cc\3",
    "\2\2\2\u01ce\u01d1\3\2\2\2\u01cf\u01cd\3\2\2\2\u01cf\u01d0\3\2\2\2\u01d0",
    "\u01d5\3\2\2\2\u01d1\u01cf\3\2\2\2\u01d2\u01d4\5`\61\2\u01d3\u01d2\3",
    "\2\2\2\u01d4\u01d7\3\2\2\2\u01d5\u01d3\3\2\2\2\u01d5\u01d6\3\2\2\2\u01d6",
    "\u01db\3\2\2\2\u01d7\u01d5\3\2\2\2\u01d8\u01da\5Z.\2\u01d9\u01d8\3\2",
    "\2\2\u01da\u01dd\3\2\2\2\u01db\u01d9\3\2\2\2\u01db\u01dc\3\2\2\2\u01dc",
    "\u01de\3\2\2\2\u01dd\u01db\3\2\2\2\u01de\u01df\5\\/\2\u01df\u01e0\7",
    "\21\2\2\u01e0c\3\2\2\2\u01e1\u01e2\7K\2\2\u01e2e\3\2\2\2\u01e3\u01e8",
    "\5d\63\2\u01e4\u01e5\7\f\2\2\u01e5\u01e7\5d\63\2\u01e6\u01e4\3\2\2\2",
    "\u01e7\u01ea\3\2\2\2\u01e8\u01e6\3\2\2\2\u01e8\u01e9\3\2\2\2\u01e9g",
    "\3\2\2\2\u01ea\u01e8\3\2\2\2\u01eb\u01ec\7N\2\2\u01eci\3\2\2\2\61kp",
    "~\u0087\u0093\u00a1\u00a8\u00ac\u00b0\u00b6\u00bd\u00c0\u00c3\u00d3",
    "\u00dc\u00e2\u00f5\u00f8\u00ff\u0105\u010b\u010e\u0117\u0121\u012b\u012d",
    "\u014a\u0157\u015e\u0170\u017b\u0180\u0184\u018f\u0194\u0199\u019e\u01a9",
    "\u01ab\u01b3\u01c1\u01c7\u01ca\u01cf\u01d5\u01db\u01e8"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ 'null', "'package'", "';'", "'import'", "'constants'", 
                     "'conflict'", "'register'", "'wme'", "'with'", "'('", 
                     "','", "')'", "'action'", "'extends'", "'{'", "'}'", 
                     "'property'", "'='", "'precondition'", "'context_condition'", 
                     "'entry_condition'", "'success_condition'", "'success_test'", 
                     "'number_needed_for_success'", "'teammembers'", "'specificity'", 
                     "'priority'", "'priority_modifier'", "'persistent'", 
                     "'act'", "'at'", "'initial_tree'", "'decision_cycle_sm_call'", 
                     "'behaving_entity'", "'&&'", "'||'", "'::'", "'>'", 
                     "'>='", "'<'", "'<='", "'=='", "'!='", "'!'", "'when_fails'", 
                     "'when_succeeds'", "'ignore_failure'", "'effect_only'", 
                     "'team_effect_only'", "'post'", "'post_to'", "'team_needed_for_success'", 
                     "'one_needed_for_success'", "'fail'", "'succeed'", 
                     "'wait'", "'move_step'", "'delete_step'", "'add_step'", 
                     "'sequential'", "'parallel'", "'collection'", 'null', 
                     "'subgoal'", "'spawngoal'", "'joint_goal_success_negotiation'", 
                     "'joint'", "'atomic'", "'adaptive'", "'*'", 'null', 
                     "'Null'" ];

var symbolicNames = [ 'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', "AND", 
                      "OR", "BIND", "GT", "GE", "LT", "LE", "EQ", "NE", 
                      "BANG", "WHEN_FAILS", "WHEN_SUCCEEDS", "IGNORE_FAILURE", 
                      "EFFECT_ONLY", "TEAM_EFFECT_ONLY", "POST", "POST_TO", 
                      "TEAMNEEDED", "ONENEEDED", "FAIL", "SUCCEED", "WAIT", 
                      "MOVESTEP", "DELETESTEP", "ADDSTEP", "SEQ", "PAR", 
                      "COLL", "BEH", "SUBGOAL", "SPAWNGOAL", "JOINTNEG", 
                      "JOINT", "ATOMIC", "ADAPTIVE", "STAR", "BOOL", "NULL", 
                      "TYPE", "CHARS", "FLOAT", "INT", "STRING", "WS" ];

var ruleNames =  [ "prog", "g_package", "g_import", "constants", "teamNeeded", 
                   "conflictDecl", "wmeRegistration", "wmeRegistration_plural", 
                   "ablLiteral", "ablExpression", "params", "param", "actionRegistration", 
                   "ablVariableDeclaration", "wmeDeclaration", "propertyDeclaration", 
                   "operator", "wmeFieldTest", "wmeTest", "binaryOp", "javaMethod", 
                   "clause", "booleanHelper", "mixedCall", "conditionalExpression", 
                   "wmeTestSequence", "testExpression", "precondition", 
                   "contextCondition", "entryCondition", "successCondition", 
                   "successTest", "numberNeededForSuccess", "teamMemberSpecifier", 
                   "specificity", "behaviourModifier", "priorityModifier", 
                   "persistence", "namedProperty", "stepModifier", "basicStep", 
                   "primitiveAct", "goalStep", "behaviourStep", "behaviourDefinition", 
                   "initialTree", "decisionCycleSMCallDeclaration", "ablDeclaration", 
                   "behavingEntity", "name", "nameList", "string" ];

function ABLParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

ABLParser.prototype = Object.create(antlr4.Parser.prototype);
ABLParser.prototype.constructor = ABLParser;

Object.defineProperty(ABLParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

ABLParser.EOF = antlr4.Token.EOF;
ABLParser.T__0 = 1;
ABLParser.T__1 = 2;
ABLParser.T__2 = 3;
ABLParser.T__3 = 4;
ABLParser.T__4 = 5;
ABLParser.T__5 = 6;
ABLParser.T__6 = 7;
ABLParser.T__7 = 8;
ABLParser.T__8 = 9;
ABLParser.T__9 = 10;
ABLParser.T__10 = 11;
ABLParser.T__11 = 12;
ABLParser.T__12 = 13;
ABLParser.T__13 = 14;
ABLParser.T__14 = 15;
ABLParser.T__15 = 16;
ABLParser.T__16 = 17;
ABLParser.T__17 = 18;
ABLParser.T__18 = 19;
ABLParser.T__19 = 20;
ABLParser.T__20 = 21;
ABLParser.T__21 = 22;
ABLParser.T__22 = 23;
ABLParser.T__23 = 24;
ABLParser.T__24 = 25;
ABLParser.T__25 = 26;
ABLParser.T__26 = 27;
ABLParser.T__27 = 28;
ABLParser.T__28 = 29;
ABLParser.T__29 = 30;
ABLParser.T__30 = 31;
ABLParser.T__31 = 32;
ABLParser.T__32 = 33;
ABLParser.AND = 34;
ABLParser.OR = 35;
ABLParser.BIND = 36;
ABLParser.GT = 37;
ABLParser.GE = 38;
ABLParser.LT = 39;
ABLParser.LE = 40;
ABLParser.EQ = 41;
ABLParser.NE = 42;
ABLParser.BANG = 43;
ABLParser.WHEN_FAILS = 44;
ABLParser.WHEN_SUCCEEDS = 45;
ABLParser.IGNORE_FAILURE = 46;
ABLParser.EFFECT_ONLY = 47;
ABLParser.TEAM_EFFECT_ONLY = 48;
ABLParser.POST = 49;
ABLParser.POST_TO = 50;
ABLParser.TEAMNEEDED = 51;
ABLParser.ONENEEDED = 52;
ABLParser.FAIL = 53;
ABLParser.SUCCEED = 54;
ABLParser.WAIT = 55;
ABLParser.MOVESTEP = 56;
ABLParser.DELETESTEP = 57;
ABLParser.ADDSTEP = 58;
ABLParser.SEQ = 59;
ABLParser.PAR = 60;
ABLParser.COLL = 61;
ABLParser.BEH = 62;
ABLParser.SUBGOAL = 63;
ABLParser.SPAWNGOAL = 64;
ABLParser.JOINTNEG = 65;
ABLParser.JOINT = 66;
ABLParser.ATOMIC = 67;
ABLParser.ADAPTIVE = 68;
ABLParser.STAR = 69;
ABLParser.BOOL = 70;
ABLParser.NULL = 71;
ABLParser.TYPE = 72;
ABLParser.CHARS = 73;
ABLParser.FLOAT = 74;
ABLParser.INT = 75;
ABLParser.STRING = 76;
ABLParser.WS = 77;

ABLParser.RULE_prog = 0;
ABLParser.RULE_g_package = 1;
ABLParser.RULE_g_import = 2;
ABLParser.RULE_constants = 3;
ABLParser.RULE_teamNeeded = 4;
ABLParser.RULE_conflictDecl = 5;
ABLParser.RULE_wmeRegistration = 6;
ABLParser.RULE_wmeRegistration_plural = 7;
ABLParser.RULE_ablLiteral = 8;
ABLParser.RULE_ablExpression = 9;
ABLParser.RULE_params = 10;
ABLParser.RULE_param = 11;
ABLParser.RULE_actionRegistration = 12;
ABLParser.RULE_ablVariableDeclaration = 13;
ABLParser.RULE_wmeDeclaration = 14;
ABLParser.RULE_propertyDeclaration = 15;
ABLParser.RULE_operator = 16;
ABLParser.RULE_wmeFieldTest = 17;
ABLParser.RULE_wmeTest = 18;
ABLParser.RULE_binaryOp = 19;
ABLParser.RULE_javaMethod = 20;
ABLParser.RULE_clause = 21;
ABLParser.RULE_booleanHelper = 22;
ABLParser.RULE_mixedCall = 23;
ABLParser.RULE_conditionalExpression = 24;
ABLParser.RULE_wmeTestSequence = 25;
ABLParser.RULE_testExpression = 26;
ABLParser.RULE_precondition = 27;
ABLParser.RULE_contextCondition = 28;
ABLParser.RULE_entryCondition = 29;
ABLParser.RULE_successCondition = 30;
ABLParser.RULE_successTest = 31;
ABLParser.RULE_numberNeededForSuccess = 32;
ABLParser.RULE_teamMemberSpecifier = 33;
ABLParser.RULE_specificity = 34;
ABLParser.RULE_behaviourModifier = 35;
ABLParser.RULE_priorityModifier = 36;
ABLParser.RULE_persistence = 37;
ABLParser.RULE_namedProperty = 38;
ABLParser.RULE_stepModifier = 39;
ABLParser.RULE_basicStep = 40;
ABLParser.RULE_primitiveAct = 41;
ABLParser.RULE_goalStep = 42;
ABLParser.RULE_behaviourStep = 43;
ABLParser.RULE_behaviourDefinition = 44;
ABLParser.RULE_initialTree = 45;
ABLParser.RULE_decisionCycleSMCallDeclaration = 46;
ABLParser.RULE_ablDeclaration = 47;
ABLParser.RULE_behavingEntity = 48;
ABLParser.RULE_name = 49;
ABLParser.RULE_nameList = 50;
ABLParser.RULE_string = 51;

function ProgContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_prog;
    return this;
}

ProgContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgContext.prototype.constructor = ProgContext;

ProgContext.prototype.constants = function() {
    return this.getTypedRuleContext(ConstantsContext,0);
};

ProgContext.prototype.behavingEntity = function() {
    return this.getTypedRuleContext(BehavingEntityContext,0);
};

ProgContext.prototype.EOF = function() {
    return this.getToken(ABLParser.EOF, 0);
};

ProgContext.prototype.g_package = function() {
    return this.getTypedRuleContext(G_packageContext,0);
};

ProgContext.prototype.g_import = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(G_importContext);
    } else {
        return this.getTypedRuleContext(G_importContext,i);
    }
};

ProgContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterProg(this);
	}
};

ProgContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitProg(this);
	}
};




ABLParser.ProgContext = ProgContext;

ABLParser.prototype.prog = function() {

    var localctx = new ProgContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, ABLParser.RULE_prog);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 105;
        _la = this._input.LA(1);
        if(_la===ABLParser.T__0) {
            this.state = 104;
            this.g_package();
        }

        this.state = 110;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ABLParser.T__2) {
            this.state = 107;
            this.g_import();
            this.state = 112;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 113;
        this.constants();
        this.state = 114;
        this.behavingEntity();
        this.state = 115;
        this.match(ABLParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function G_packageContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_g_package;
    return this;
}

G_packageContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
G_packageContext.prototype.constructor = G_packageContext;

G_packageContext.prototype.TYPE = function() {
    return this.getToken(ABLParser.TYPE, 0);
};

G_packageContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterG_package(this);
	}
};

G_packageContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitG_package(this);
	}
};




ABLParser.G_packageContext = G_packageContext;

ABLParser.prototype.g_package = function() {

    var localctx = new G_packageContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, ABLParser.RULE_g_package);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 117;
        this.match(ABLParser.T__0);
        this.state = 118;
        this.match(ABLParser.TYPE);
        this.state = 119;
        this.match(ABLParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function G_importContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_g_import;
    return this;
}

G_importContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
G_importContext.prototype.constructor = G_importContext;

G_importContext.prototype.TYPE = function() {
    return this.getToken(ABLParser.TYPE, 0);
};

G_importContext.prototype.STAR = function() {
    return this.getToken(ABLParser.STAR, 0);
};

G_importContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterG_import(this);
	}
};

G_importContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitG_import(this);
	}
};




ABLParser.G_importContext = G_importContext;

ABLParser.prototype.g_import = function() {

    var localctx = new G_importContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, ABLParser.RULE_g_import);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 121;
        this.match(ABLParser.T__2);
        this.state = 122;
        this.match(ABLParser.TYPE);
        this.state = 124;
        _la = this._input.LA(1);
        if(_la===ABLParser.STAR) {
            this.state = 123;
            this.match(ABLParser.STAR);
        }

        this.state = 126;
        this.match(ABLParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ConstantsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_constants;
    return this;
}

ConstantsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConstantsContext.prototype.constructor = ConstantsContext;

ConstantsContext.prototype.TYPE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ABLParser.TYPE);
    } else {
        return this.getToken(ABLParser.TYPE, i);
    }
};


ConstantsContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterConstants(this);
	}
};

ConstantsContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitConstants(this);
	}
};




ABLParser.ConstantsContext = ConstantsContext;

ABLParser.prototype.constants = function() {

    var localctx = new ConstantsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, ABLParser.RULE_constants);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 133;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ABLParser.T__3) {
            this.state = 128;
            this.match(ABLParser.T__3);
            this.state = 129;
            this.match(ABLParser.TYPE);
            this.state = 130;
            this.match(ABLParser.T__1);
            this.state = 135;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TeamNeededContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_teamNeeded;
    return this;
}

TeamNeededContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TeamNeededContext.prototype.constructor = TeamNeededContext;

TeamNeededContext.prototype.JOINTNEG = function() {
    return this.getToken(ABLParser.JOINTNEG, 0);
};

TeamNeededContext.prototype.TEAMNEEDED = function() {
    return this.getToken(ABLParser.TEAMNEEDED, 0);
};

TeamNeededContext.prototype.ONENEEDED = function() {
    return this.getToken(ABLParser.ONENEEDED, 0);
};

TeamNeededContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterTeamNeeded(this);
	}
};

TeamNeededContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitTeamNeeded(this);
	}
};




ABLParser.TeamNeededContext = TeamNeededContext;

ABLParser.prototype.teamNeeded = function() {

    var localctx = new TeamNeededContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, ABLParser.RULE_teamNeeded);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 136;
        this.match(ABLParser.JOINTNEG);
        this.state = 137;
        _la = this._input.LA(1);
        if(!(_la===ABLParser.TEAMNEEDED || _la===ABLParser.ONENEEDED)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
        this.state = 138;
        this.match(ABLParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ConflictDeclContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_conflictDecl;
    return this;
}

ConflictDeclContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConflictDeclContext.prototype.constructor = ConflictDeclContext;

ConflictDeclContext.prototype.name = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NameContext);
    } else {
        return this.getTypedRuleContext(NameContext,i);
    }
};

ConflictDeclContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterConflictDecl(this);
	}
};

ConflictDeclContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitConflictDecl(this);
	}
};




ABLParser.ConflictDeclContext = ConflictDeclContext;

ABLParser.prototype.conflictDecl = function() {

    var localctx = new ConflictDeclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, ABLParser.RULE_conflictDecl);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 140;
        this.match(ABLParser.T__4);
        this.state = 141;
        this.name();
        this.state = 143; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 142;
            this.name();
            this.state = 145; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===ABLParser.CHARS);
        this.state = 147;
        this.match(ABLParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function WmeRegistrationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_wmeRegistration;
    return this;
}

WmeRegistrationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WmeRegistrationContext.prototype.constructor = WmeRegistrationContext;

WmeRegistrationContext.prototype.TYPE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ABLParser.TYPE);
    } else {
        return this.getToken(ABLParser.TYPE, i);
    }
};


WmeRegistrationContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterWmeRegistration(this);
	}
};

WmeRegistrationContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitWmeRegistration(this);
	}
};




ABLParser.WmeRegistrationContext = WmeRegistrationContext;

ABLParser.prototype.wmeRegistration = function() {

    var localctx = new WmeRegistrationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, ABLParser.RULE_wmeRegistration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 149;
        this.match(ABLParser.T__5);
        this.state = 150;
        this.match(ABLParser.T__6);
        this.state = 151;
        this.match(ABLParser.TYPE);
        this.state = 152;
        this.match(ABLParser.T__7);
        this.state = 153;
        this.match(ABLParser.TYPE);
        this.state = 154;
        this.match(ABLParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function WmeRegistration_pluralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_wmeRegistration_plural;
    return this;
}

WmeRegistration_pluralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WmeRegistration_pluralContext.prototype.constructor = WmeRegistration_pluralContext;

WmeRegistration_pluralContext.prototype.wmeRegistration = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(WmeRegistrationContext);
    } else {
        return this.getTypedRuleContext(WmeRegistrationContext,i);
    }
};

WmeRegistration_pluralContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterWmeRegistration_plural(this);
	}
};

WmeRegistration_pluralContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitWmeRegistration_plural(this);
	}
};




ABLParser.WmeRegistration_pluralContext = WmeRegistration_pluralContext;

ABLParser.prototype.wmeRegistration_plural = function() {

    var localctx = new WmeRegistration_pluralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, ABLParser.RULE_wmeRegistration_plural);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 157; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 156;
            this.wmeRegistration();
            this.state = 159; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===ABLParser.T__5);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AblLiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_ablLiteral;
    return this;
}

AblLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AblLiteralContext.prototype.constructor = AblLiteralContext;

AblLiteralContext.prototype.INT = function() {
    return this.getToken(ABLParser.INT, 0);
};

AblLiteralContext.prototype.FLOAT = function() {
    return this.getToken(ABLParser.FLOAT, 0);
};

AblLiteralContext.prototype.string = function() {
    return this.getTypedRuleContext(StringContext,0);
};

AblLiteralContext.prototype.BOOL = function() {
    return this.getToken(ABLParser.BOOL, 0);
};

AblLiteralContext.prototype.NULL = function() {
    return this.getToken(ABLParser.NULL, 0);
};

AblLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterAblLiteral(this);
	}
};

AblLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitAblLiteral(this);
	}
};




ABLParser.AblLiteralContext = AblLiteralContext;

ABLParser.prototype.ablLiteral = function() {

    var localctx = new AblLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, ABLParser.RULE_ablLiteral);
    try {
        this.state = 166;
        switch(this._input.LA(1)) {
        case ABLParser.INT:
            this.enterOuterAlt(localctx, 1);
            this.state = 161;
            this.match(ABLParser.INT);
            break;
        case ABLParser.FLOAT:
            this.enterOuterAlt(localctx, 2);
            this.state = 162;
            this.match(ABLParser.FLOAT);
            break;
        case ABLParser.STRING:
            this.enterOuterAlt(localctx, 3);
            this.state = 163;
            this.string();
            break;
        case ABLParser.BOOL:
            this.enterOuterAlt(localctx, 4);
            this.state = 164;
            this.match(ABLParser.BOOL);
            break;
        case ABLParser.NULL:
            this.enterOuterAlt(localctx, 5);
            this.state = 165;
            this.match(ABLParser.NULL);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AblExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_ablExpression;
    return this;
}

AblExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AblExpressionContext.prototype.constructor = AblExpressionContext;

AblExpressionContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};

AblExpressionContext.prototype.ablLiteral = function() {
    return this.getTypedRuleContext(AblLiteralContext,0);
};

AblExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterAblExpression(this);
	}
};

AblExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitAblExpression(this);
	}
};




ABLParser.AblExpressionContext = AblExpressionContext;

ABLParser.prototype.ablExpression = function() {

    var localctx = new AblExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, ABLParser.RULE_ablExpression);
    try {
        this.state = 170;
        switch(this._input.LA(1)) {
        case ABLParser.CHARS:
            this.enterOuterAlt(localctx, 1);
            this.state = 168;
            this.name();
            break;
        case ABLParser.BOOL:
        case ABLParser.NULL:
        case ABLParser.FLOAT:
        case ABLParser.INT:
        case ABLParser.STRING:
            this.enterOuterAlt(localctx, 2);
            this.state = 169;
            this.ablLiteral();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ParamsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_params;
    return this;
}

ParamsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParamsContext.prototype.constructor = ParamsContext;

ParamsContext.prototype.param = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ParamContext);
    } else {
        return this.getTypedRuleContext(ParamContext,i);
    }
};

ParamsContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterParams(this);
	}
};

ParamsContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitParams(this);
	}
};




ABLParser.ParamsContext = ParamsContext;

ABLParser.prototype.params = function() {

    var localctx = new ParamsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, ABLParser.RULE_params);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 172;
        this.match(ABLParser.T__8);
        this.state = 174;
        _la = this._input.LA(1);
        if(((((_la - 70)) & ~0x1f) == 0 && ((1 << (_la - 70)) & ((1 << (ABLParser.BOOL - 70)) | (1 << (ABLParser.NULL - 70)) | (1 << (ABLParser.TYPE - 70)) | (1 << (ABLParser.CHARS - 70)) | (1 << (ABLParser.FLOAT - 70)) | (1 << (ABLParser.INT - 70)) | (1 << (ABLParser.STRING - 70)))) !== 0)) {
            this.state = 173;
            this.param();
        }

        this.state = 180;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ABLParser.T__9) {
            this.state = 176;
            this.match(ABLParser.T__9);
            this.state = 177;
            this.param();
            this.state = 182;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 183;
        this.match(ABLParser.T__10);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ParamContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_param;
    return this;
}

ParamContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParamContext.prototype.constructor = ParamContext;

ParamContext.prototype.TYPE = function() {
    return this.getToken(ABLParser.TYPE, 0);
};

ParamContext.prototype.ablExpression = function() {
    return this.getTypedRuleContext(AblExpressionContext,0);
};

ParamContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterParam(this);
	}
};

ParamContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitParam(this);
	}
};




ABLParser.ParamContext = ParamContext;

ABLParser.prototype.param = function() {

    var localctx = new ParamContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, ABLParser.RULE_param);
    var _la = 0; // Token type
    try {
        this.state = 193;
        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 185;
            this.match(ABLParser.TYPE);
            this.state = 187;
            _la = this._input.LA(1);
            if(((((_la - 70)) & ~0x1f) == 0 && ((1 << (_la - 70)) & ((1 << (ABLParser.BOOL - 70)) | (1 << (ABLParser.NULL - 70)) | (1 << (ABLParser.CHARS - 70)) | (1 << (ABLParser.FLOAT - 70)) | (1 << (ABLParser.INT - 70)) | (1 << (ABLParser.STRING - 70)))) !== 0)) {
                this.state = 186;
                this.ablExpression();
            }

            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 190;
            _la = this._input.LA(1);
            if(_la===ABLParser.TYPE) {
                this.state = 189;
                this.match(ABLParser.TYPE);
            }

            this.state = 192;
            this.ablExpression();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ActionRegistrationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_actionRegistration;
    return this;
}

ActionRegistrationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ActionRegistrationContext.prototype.constructor = ActionRegistrationContext;

ActionRegistrationContext.prototype.TYPE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ABLParser.TYPE);
    } else {
        return this.getToken(ABLParser.TYPE, i);
    }
};


ActionRegistrationContext.prototype.params = function() {
    return this.getTypedRuleContext(ParamsContext,0);
};

ActionRegistrationContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterActionRegistration(this);
	}
};

ActionRegistrationContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitActionRegistration(this);
	}
};




ABLParser.ActionRegistrationContext = ActionRegistrationContext;

ABLParser.prototype.actionRegistration = function() {

    var localctx = new ActionRegistrationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, ABLParser.RULE_actionRegistration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 195;
        this.match(ABLParser.T__5);
        this.state = 196;
        this.match(ABLParser.T__11);
        this.state = 197;
        this.match(ABLParser.TYPE);
        this.state = 198;
        this.params();
        this.state = 199;
        this.match(ABLParser.T__7);
        this.state = 200;
        this.match(ABLParser.TYPE);
        this.state = 201;
        this.match(ABLParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AblVariableDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_ablVariableDeclaration;
    return this;
}

AblVariableDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AblVariableDeclarationContext.prototype.constructor = AblVariableDeclarationContext;

AblVariableDeclarationContext.prototype.TYPE = function() {
    return this.getToken(ABLParser.TYPE, 0);
};

AblVariableDeclarationContext.prototype.name = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NameContext);
    } else {
        return this.getTypedRuleContext(NameContext,i);
    }
};

AblVariableDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterAblVariableDeclaration(this);
	}
};

AblVariableDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitAblVariableDeclaration(this);
	}
};




ABLParser.AblVariableDeclarationContext = AblVariableDeclarationContext;

ABLParser.prototype.ablVariableDeclaration = function() {

    var localctx = new AblVariableDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, ABLParser.RULE_ablVariableDeclaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 203;
        this.match(ABLParser.TYPE);
        this.state = 204;
        this.name();
        this.state = 209;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ABLParser.T__9) {
            this.state = 205;
            this.match(ABLParser.T__9);
            this.state = 206;
            this.name();
            this.state = 211;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 212;
        this.match(ABLParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function WmeDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_wmeDeclaration;
    return this;
}

WmeDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WmeDeclarationContext.prototype.constructor = WmeDeclarationContext;

WmeDeclarationContext.prototype.TYPE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ABLParser.TYPE);
    } else {
        return this.getToken(ABLParser.TYPE, i);
    }
};


WmeDeclarationContext.prototype.ablVariableDeclaration = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AblVariableDeclarationContext);
    } else {
        return this.getTypedRuleContext(AblVariableDeclarationContext,i);
    }
};

WmeDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterWmeDeclaration(this);
	}
};

WmeDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitWmeDeclaration(this);
	}
};




ABLParser.WmeDeclarationContext = WmeDeclarationContext;

ABLParser.prototype.wmeDeclaration = function() {

    var localctx = new WmeDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, ABLParser.RULE_wmeDeclaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 214;
        this.match(ABLParser.T__6);
        this.state = 215;
        this.match(ABLParser.TYPE);
        this.state = 218;
        _la = this._input.LA(1);
        if(_la===ABLParser.T__12) {
            this.state = 216;
            this.match(ABLParser.T__12);
            this.state = 217;
            this.match(ABLParser.TYPE);
        }

        this.state = 220;
        this.match(ABLParser.T__13);
        this.state = 224;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ABLParser.TYPE) {
            this.state = 221;
            this.ablVariableDeclaration();
            this.state = 226;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 227;
        this.match(ABLParser.T__14);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PropertyDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_propertyDeclaration;
    return this;
}

PropertyDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PropertyDeclarationContext.prototype.constructor = PropertyDeclarationContext;

PropertyDeclarationContext.prototype.TYPE = function() {
    return this.getToken(ABLParser.TYPE, 0);
};

PropertyDeclarationContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};

PropertyDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterPropertyDeclaration(this);
	}
};

PropertyDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitPropertyDeclaration(this);
	}
};




ABLParser.PropertyDeclarationContext = PropertyDeclarationContext;

ABLParser.prototype.propertyDeclaration = function() {

    var localctx = new PropertyDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, ABLParser.RULE_propertyDeclaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 229;
        this.match(ABLParser.T__15);
        this.state = 230;
        this.match(ABLParser.TYPE);
        this.state = 231;
        this.name();
        this.state = 232;
        this.match(ABLParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function OperatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_operator;
    return this;
}

OperatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperatorContext.prototype.constructor = OperatorContext;

OperatorContext.prototype.BIND = function() {
    return this.getToken(ABLParser.BIND, 0);
};

OperatorContext.prototype.GT = function() {
    return this.getToken(ABLParser.GT, 0);
};

OperatorContext.prototype.GE = function() {
    return this.getToken(ABLParser.GE, 0);
};

OperatorContext.prototype.LT = function() {
    return this.getToken(ABLParser.LT, 0);
};

OperatorContext.prototype.LE = function() {
    return this.getToken(ABLParser.LE, 0);
};

OperatorContext.prototype.EQ = function() {
    return this.getToken(ABLParser.EQ, 0);
};

OperatorContext.prototype.NE = function() {
    return this.getToken(ABLParser.NE, 0);
};

OperatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterOperator(this);
	}
};

OperatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitOperator(this);
	}
};




ABLParser.OperatorContext = OperatorContext;

ABLParser.prototype.operator = function() {

    var localctx = new OperatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, ABLParser.RULE_operator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 234;
        _la = this._input.LA(1);
        if(!(((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (ABLParser.BIND - 36)) | (1 << (ABLParser.GT - 36)) | (1 << (ABLParser.GE - 36)) | (1 << (ABLParser.LT - 36)) | (1 << (ABLParser.LE - 36)) | (1 << (ABLParser.EQ - 36)) | (1 << (ABLParser.NE - 36)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function WmeFieldTestContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_wmeFieldTest;
    return this;
}

WmeFieldTestContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WmeFieldTestContext.prototype.constructor = WmeFieldTestContext;

WmeFieldTestContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};

WmeFieldTestContext.prototype.operator = function() {
    return this.getTypedRuleContext(OperatorContext,0);
};

WmeFieldTestContext.prototype.ablExpression = function() {
    return this.getTypedRuleContext(AblExpressionContext,0);
};

WmeFieldTestContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterWmeFieldTest(this);
	}
};

WmeFieldTestContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitWmeFieldTest(this);
	}
};




ABLParser.WmeFieldTestContext = WmeFieldTestContext;

ABLParser.prototype.wmeFieldTest = function() {

    var localctx = new WmeFieldTestContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, ABLParser.RULE_wmeFieldTest);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 236;
        this.name();
        this.state = 237;
        this.operator();
        this.state = 238;
        this.ablExpression();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function WmeTestContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_wmeTest;
    return this;
}

WmeTestContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WmeTestContext.prototype.constructor = WmeTestContext;

WmeTestContext.prototype.TYPE = function() {
    return this.getToken(ABLParser.TYPE, 0);
};

WmeTestContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};

WmeTestContext.prototype.BANG = function() {
    return this.getToken(ABLParser.BANG, 0);
};

WmeTestContext.prototype.wmeFieldTest = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(WmeFieldTestContext);
    } else {
        return this.getTypedRuleContext(WmeFieldTestContext,i);
    }
};

WmeTestContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterWmeTest(this);
	}
};

WmeTestContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitWmeTest(this);
	}
};




ABLParser.WmeTestContext = WmeTestContext;

ABLParser.prototype.wmeTest = function() {

    var localctx = new WmeTestContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, ABLParser.RULE_wmeTest);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 243;
        _la = this._input.LA(1);
        if(_la===ABLParser.CHARS) {
            this.state = 240;
            this.name();
            this.state = 241;
            this.match(ABLParser.T__16);
        }

        this.state = 246;
        _la = this._input.LA(1);
        if(_la===ABLParser.BANG) {
            this.state = 245;
            this.match(ABLParser.BANG);
        }

        this.state = 248;
        this.match(ABLParser.T__8);
        this.state = 249;
        this.match(ABLParser.TYPE);
        this.state = 253;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ABLParser.CHARS) {
            this.state = 250;
            this.wmeFieldTest();
            this.state = 255;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 256;
        this.match(ABLParser.T__10);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BinaryOpContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_binaryOp;
    return this;
}

BinaryOpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BinaryOpContext.prototype.constructor = BinaryOpContext;

BinaryOpContext.prototype.ablExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AblExpressionContext);
    } else {
        return this.getTypedRuleContext(AblExpressionContext,i);
    }
};

BinaryOpContext.prototype.BANG = function() {
    return this.getToken(ABLParser.BANG, 0);
};

BinaryOpContext.prototype.operator = function() {
    return this.getTypedRuleContext(OperatorContext,0);
};

BinaryOpContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterBinaryOp(this);
	}
};

BinaryOpContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitBinaryOp(this);
	}
};




ABLParser.BinaryOpContext = BinaryOpContext;

ABLParser.prototype.binaryOp = function() {

    var localctx = new BinaryOpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, ABLParser.RULE_binaryOp);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 259;
        _la = this._input.LA(1);
        if(_la===ABLParser.BANG) {
            this.state = 258;
            this.match(ABLParser.BANG);
        }

        this.state = 261;
        this.ablExpression();
        this.state = 265;
        _la = this._input.LA(1);
        if(((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (ABLParser.BIND - 36)) | (1 << (ABLParser.GT - 36)) | (1 << (ABLParser.GE - 36)) | (1 << (ABLParser.LT - 36)) | (1 << (ABLParser.LE - 36)) | (1 << (ABLParser.EQ - 36)) | (1 << (ABLParser.NE - 36)))) !== 0)) {
            this.state = 262;
            this.operator();
            this.state = 263;
            this.ablExpression();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function JavaMethodContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_javaMethod;
    return this;
}

JavaMethodContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
JavaMethodContext.prototype.constructor = JavaMethodContext;

JavaMethodContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};

JavaMethodContext.prototype.params = function() {
    return this.getTypedRuleContext(ParamsContext,0);
};

JavaMethodContext.prototype.BANG = function() {
    return this.getToken(ABLParser.BANG, 0);
};

JavaMethodContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterJavaMethod(this);
	}
};

JavaMethodContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitJavaMethod(this);
	}
};




ABLParser.JavaMethodContext = JavaMethodContext;

ABLParser.prototype.javaMethod = function() {

    var localctx = new JavaMethodContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, ABLParser.RULE_javaMethod);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 268;
        _la = this._input.LA(1);
        if(_la===ABLParser.BANG) {
            this.state = 267;
            this.match(ABLParser.BANG);
        }

        this.state = 270;
        this.name();
        this.state = 271;
        this.params();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_clause;
    return this;
}

ClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ClauseContext.prototype.constructor = ClauseContext;

ClauseContext.prototype.BOOL = function() {
    return this.getToken(ABLParser.BOOL, 0);
};

ClauseContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};

ClauseContext.prototype.javaMethod = function() {
    return this.getTypedRuleContext(JavaMethodContext,0);
};

ClauseContext.prototype.binaryOp = function() {
    return this.getTypedRuleContext(BinaryOpContext,0);
};

ClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterClause(this);
	}
};

ClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitClause(this);
	}
};




ABLParser.ClauseContext = ClauseContext;

ABLParser.prototype.clause = function() {

    var localctx = new ClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, ABLParser.RULE_clause);
    try {
        this.state = 277;
        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 273;
            this.match(ABLParser.BOOL);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 274;
            this.name();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 275;
            this.javaMethod();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 276;
            this.binaryOp();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BooleanHelperContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_booleanHelper;
    return this;
}

BooleanHelperContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BooleanHelperContext.prototype.constructor = BooleanHelperContext;

BooleanHelperContext.prototype.AND = function() {
    return this.getToken(ABLParser.AND, 0);
};

BooleanHelperContext.prototype.OR = function() {
    return this.getToken(ABLParser.OR, 0);
};

BooleanHelperContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterBooleanHelper(this);
	}
};

BooleanHelperContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitBooleanHelper(this);
	}
};




ABLParser.BooleanHelperContext = BooleanHelperContext;

ABLParser.prototype.booleanHelper = function() {

    var localctx = new BooleanHelperContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, ABLParser.RULE_booleanHelper);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 279;
        _la = this._input.LA(1);
        if(!(_la===ABLParser.AND || _la===ABLParser.OR)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MixedCallContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_mixedCall;
    return this;
}

MixedCallContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MixedCallContext.prototype.constructor = MixedCallContext;

MixedCallContext.prototype.clause = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ClauseContext);
    } else {
        return this.getTypedRuleContext(ClauseContext,i);
    }
};

MixedCallContext.prototype.booleanHelper = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BooleanHelperContext);
    } else {
        return this.getTypedRuleContext(BooleanHelperContext,i);
    }
};

MixedCallContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterMixedCall(this);
	}
};

MixedCallContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitMixedCall(this);
	}
};




ABLParser.MixedCallContext = MixedCallContext;

ABLParser.prototype.mixedCall = function() {

    var localctx = new MixedCallContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, ABLParser.RULE_mixedCall);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 281;
        this.clause();
        this.state = 287;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ABLParser.AND || _la===ABLParser.OR) {
            this.state = 282;
            this.booleanHelper();
            this.state = 283;
            this.clause();
            this.state = 289;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ConditionalExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_conditionalExpression;
    return this;
}

ConditionalExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConditionalExpressionContext.prototype.constructor = ConditionalExpressionContext;

ConditionalExpressionContext.prototype.mixedCall = function() {
    return this.getTypedRuleContext(MixedCallContext,0);
};

ConditionalExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterConditionalExpression(this);
	}
};

ConditionalExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitConditionalExpression(this);
	}
};




ABLParser.ConditionalExpressionContext = ConditionalExpressionContext;

ABLParser.prototype.conditionalExpression = function() {

    var localctx = new ConditionalExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, ABLParser.RULE_conditionalExpression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 290;
        this.match(ABLParser.T__8);
        this.state = 291;
        this.mixedCall();
        this.state = 292;
        this.match(ABLParser.T__10);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function WmeTestSequenceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_wmeTestSequence;
    return this;
}

WmeTestSequenceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WmeTestSequenceContext.prototype.constructor = WmeTestSequenceContext;

WmeTestSequenceContext.prototype.wmeTest = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(WmeTestContext);
    } else {
        return this.getTypedRuleContext(WmeTestContext,i);
    }
};

WmeTestSequenceContext.prototype.conditionalExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ConditionalExpressionContext);
    } else {
        return this.getTypedRuleContext(ConditionalExpressionContext,i);
    }
};

WmeTestSequenceContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterWmeTestSequence(this);
	}
};

WmeTestSequenceContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitWmeTestSequence(this);
	}
};




ABLParser.WmeTestSequenceContext = WmeTestSequenceContext;

ABLParser.prototype.wmeTestSequence = function() {

    var localctx = new WmeTestSequenceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, ABLParser.RULE_wmeTestSequence);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 294;
        this.match(ABLParser.T__13);
        this.state = 297; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 297;
            var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
            switch(la_) {
            case 1:
                this.state = 295;
                this.wmeTest();
                break;

            case 2:
                this.state = 296;
                this.conditionalExpression();
                break;

            }
            this.state = 299; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===ABLParser.T__8 || _la===ABLParser.BANG || _la===ABLParser.CHARS);
        this.state = 301;
        this.match(ABLParser.T__14);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TestExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_testExpression;
    return this;
}

TestExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TestExpressionContext.prototype.constructor = TestExpressionContext;

TestExpressionContext.prototype.wmeTestSequence = function() {
    return this.getTypedRuleContext(WmeTestSequenceContext,0);
};

TestExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterTestExpression(this);
	}
};

TestExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitTestExpression(this);
	}
};




ABLParser.TestExpressionContext = TestExpressionContext;

ABLParser.prototype.testExpression = function() {

    var localctx = new TestExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, ABLParser.RULE_testExpression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 303;
        this.wmeTestSequence();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PreconditionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_precondition;
    return this;
}

PreconditionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PreconditionContext.prototype.constructor = PreconditionContext;

PreconditionContext.prototype.testExpression = function() {
    return this.getTypedRuleContext(TestExpressionContext,0);
};

PreconditionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterPrecondition(this);
	}
};

PreconditionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitPrecondition(this);
	}
};




ABLParser.PreconditionContext = PreconditionContext;

ABLParser.prototype.precondition = function() {

    var localctx = new PreconditionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, ABLParser.RULE_precondition);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 305;
        this.match(ABLParser.T__17);
        this.state = 306;
        this.testExpression();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ContextConditionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_contextCondition;
    return this;
}

ContextConditionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ContextConditionContext.prototype.constructor = ContextConditionContext;

ContextConditionContext.prototype.testExpression = function() {
    return this.getTypedRuleContext(TestExpressionContext,0);
};

ContextConditionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterContextCondition(this);
	}
};

ContextConditionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitContextCondition(this);
	}
};




ABLParser.ContextConditionContext = ContextConditionContext;

ABLParser.prototype.contextCondition = function() {

    var localctx = new ContextConditionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, ABLParser.RULE_contextCondition);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 308;
        this.match(ABLParser.T__18);
        this.state = 309;
        this.testExpression();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EntryConditionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_entryCondition;
    return this;
}

EntryConditionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EntryConditionContext.prototype.constructor = EntryConditionContext;

EntryConditionContext.prototype.testExpression = function() {
    return this.getTypedRuleContext(TestExpressionContext,0);
};

EntryConditionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterEntryCondition(this);
	}
};

EntryConditionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitEntryCondition(this);
	}
};




ABLParser.EntryConditionContext = EntryConditionContext;

ABLParser.prototype.entryCondition = function() {

    var localctx = new EntryConditionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, ABLParser.RULE_entryCondition);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 311;
        this.match(ABLParser.T__19);
        this.state = 312;
        this.testExpression();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SuccessConditionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_successCondition;
    return this;
}

SuccessConditionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SuccessConditionContext.prototype.constructor = SuccessConditionContext;

SuccessConditionContext.prototype.testExpression = function() {
    return this.getTypedRuleContext(TestExpressionContext,0);
};

SuccessConditionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterSuccessCondition(this);
	}
};

SuccessConditionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitSuccessCondition(this);
	}
};




ABLParser.SuccessConditionContext = SuccessConditionContext;

ABLParser.prototype.successCondition = function() {

    var localctx = new SuccessConditionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, ABLParser.RULE_successCondition);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 314;
        this.match(ABLParser.T__20);
        this.state = 315;
        this.testExpression();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SuccessTestContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_successTest;
    return this;
}

SuccessTestContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SuccessTestContext.prototype.constructor = SuccessTestContext;

SuccessTestContext.prototype.testExpression = function() {
    return this.getTypedRuleContext(TestExpressionContext,0);
};

SuccessTestContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterSuccessTest(this);
	}
};

SuccessTestContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitSuccessTest(this);
	}
};




ABLParser.SuccessTestContext = SuccessTestContext;

ABLParser.prototype.successTest = function() {

    var localctx = new SuccessTestContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, ABLParser.RULE_successTest);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 317;
        this.match(ABLParser.T__21);
        this.state = 318;
        this.testExpression();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NumberNeededForSuccessContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_numberNeededForSuccess;
    return this;
}

NumberNeededForSuccessContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumberNeededForSuccessContext.prototype.constructor = NumberNeededForSuccessContext;

NumberNeededForSuccessContext.prototype.ablLiteral = function() {
    return this.getTypedRuleContext(AblLiteralContext,0);
};

NumberNeededForSuccessContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterNumberNeededForSuccess(this);
	}
};

NumberNeededForSuccessContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitNumberNeededForSuccess(this);
	}
};




ABLParser.NumberNeededForSuccessContext = NumberNeededForSuccessContext;

ABLParser.prototype.numberNeededForSuccess = function() {

    var localctx = new NumberNeededForSuccessContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, ABLParser.RULE_numberNeededForSuccess);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 320;
        this.match(ABLParser.T__22);
        this.state = 321;
        this.ablLiteral();
        this.state = 322;
        this.match(ABLParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TeamMemberSpecifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_teamMemberSpecifier;
    return this;
}

TeamMemberSpecifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TeamMemberSpecifierContext.prototype.constructor = TeamMemberSpecifierContext;

TeamMemberSpecifierContext.prototype.name = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NameContext);
    } else {
        return this.getTypedRuleContext(NameContext,i);
    }
};

TeamMemberSpecifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterTeamMemberSpecifier(this);
	}
};

TeamMemberSpecifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitTeamMemberSpecifier(this);
	}
};




ABLParser.TeamMemberSpecifierContext = TeamMemberSpecifierContext;

ABLParser.prototype.teamMemberSpecifier = function() {

    var localctx = new TeamMemberSpecifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, ABLParser.RULE_teamMemberSpecifier);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 324;
        this.match(ABLParser.T__23);
        this.state = 326; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 325;
            this.name();
            this.state = 328; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===ABLParser.CHARS);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SpecificityContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_specificity;
    return this;
}

SpecificityContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SpecificityContext.prototype.constructor = SpecificityContext;

SpecificityContext.prototype.ablLiteral = function() {
    return this.getTypedRuleContext(AblLiteralContext,0);
};

SpecificityContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterSpecificity(this);
	}
};

SpecificityContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitSpecificity(this);
	}
};




ABLParser.SpecificityContext = SpecificityContext;

ABLParser.prototype.specificity = function() {

    var localctx = new SpecificityContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, ABLParser.RULE_specificity);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 330;
        this.match(ABLParser.T__24);
        this.state = 331;
        this.ablLiteral();
        this.state = 332;
        this.match(ABLParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BehaviourModifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_behaviourModifier;
    return this;
}

BehaviourModifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BehaviourModifierContext.prototype.constructor = BehaviourModifierContext;

BehaviourModifierContext.prototype.precondition = function() {
    return this.getTypedRuleContext(PreconditionContext,0);
};

BehaviourModifierContext.prototype.specificity = function() {
    return this.getTypedRuleContext(SpecificityContext,0);
};

BehaviourModifierContext.prototype.contextCondition = function() {
    return this.getTypedRuleContext(ContextConditionContext,0);
};

BehaviourModifierContext.prototype.entryCondition = function() {
    return this.getTypedRuleContext(EntryConditionContext,0);
};

BehaviourModifierContext.prototype.numberNeededForSuccess = function() {
    return this.getTypedRuleContext(NumberNeededForSuccessContext,0);
};

BehaviourModifierContext.prototype.teamMemberSpecifier = function() {
    return this.getTypedRuleContext(TeamMemberSpecifierContext,0);
};

BehaviourModifierContext.prototype.successCondition = function() {
    return this.getTypedRuleContext(SuccessConditionContext,0);
};

BehaviourModifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterBehaviourModifier(this);
	}
};

BehaviourModifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitBehaviourModifier(this);
	}
};




ABLParser.BehaviourModifierContext = BehaviourModifierContext;

ABLParser.prototype.behaviourModifier = function() {

    var localctx = new BehaviourModifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 70, ABLParser.RULE_behaviourModifier);
    try {
        this.state = 341;
        switch(this._input.LA(1)) {
        case ABLParser.T__17:
            this.enterOuterAlt(localctx, 1);
            this.state = 334;
            this.precondition();
            break;
        case ABLParser.T__24:
            this.enterOuterAlt(localctx, 2);
            this.state = 335;
            this.specificity();
            break;
        case ABLParser.T__18:
            this.enterOuterAlt(localctx, 3);
            this.state = 336;
            this.contextCondition();
            break;
        case ABLParser.T__19:
            this.enterOuterAlt(localctx, 4);
            this.state = 337;
            this.entryCondition();
            break;
        case ABLParser.T__22:
            this.enterOuterAlt(localctx, 5);
            this.state = 338;
            this.numberNeededForSuccess();
            break;
        case ABLParser.T__23:
            this.enterOuterAlt(localctx, 6);
            this.state = 339;
            this.teamMemberSpecifier();
            break;
        case ABLParser.T__20:
            this.enterOuterAlt(localctx, 7);
            this.state = 340;
            this.successCondition();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PriorityModifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_priorityModifier;
    return this;
}

PriorityModifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PriorityModifierContext.prototype.constructor = PriorityModifierContext;

PriorityModifierContext.prototype.ablLiteral = function() {
    return this.getTypedRuleContext(AblLiteralContext,0);
};

PriorityModifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterPriorityModifier(this);
	}
};

PriorityModifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitPriorityModifier(this);
	}
};




ABLParser.PriorityModifierContext = PriorityModifierContext;

ABLParser.prototype.priorityModifier = function() {

    var localctx = new PriorityModifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 72, ABLParser.RULE_priorityModifier);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 343;
        _la = this._input.LA(1);
        if(!(_la===ABLParser.T__25 || _la===ABLParser.T__26)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
        this.state = 344;
        this.ablLiteral();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PersistenceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_persistence;
    return this;
}

PersistenceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PersistenceContext.prototype.constructor = PersistenceContext;

PersistenceContext.prototype.WHEN_FAILS = function() {
    return this.getToken(ABLParser.WHEN_FAILS, 0);
};

PersistenceContext.prototype.WHEN_SUCCEEDS = function() {
    return this.getToken(ABLParser.WHEN_SUCCEEDS, 0);
};

PersistenceContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterPersistence(this);
	}
};

PersistenceContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitPersistence(this);
	}
};




ABLParser.PersistenceContext = PersistenceContext;

ABLParser.prototype.persistence = function() {

    var localctx = new PersistenceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, ABLParser.RULE_persistence);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 346;
        this.match(ABLParser.T__27);
        this.state = 348;
        _la = this._input.LA(1);
        if(_la===ABLParser.WHEN_FAILS || _la===ABLParser.WHEN_SUCCEEDS) {
            this.state = 347;
            _la = this._input.LA(1);
            if(!(_la===ABLParser.WHEN_FAILS || _la===ABLParser.WHEN_SUCCEEDS)) {
            this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NamedPropertyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_namedProperty;
    return this;
}

NamedPropertyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NamedPropertyContext.prototype.constructor = NamedPropertyContext;

NamedPropertyContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};

NamedPropertyContext.prototype.ablExpression = function() {
    return this.getTypedRuleContext(AblExpressionContext,0);
};

NamedPropertyContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterNamedProperty(this);
	}
};

NamedPropertyContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitNamedProperty(this);
	}
};




ABLParser.NamedPropertyContext = NamedPropertyContext;

ABLParser.prototype.namedProperty = function() {

    var localctx = new NamedPropertyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 76, ABLParser.RULE_namedProperty);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 350;
        this.match(ABLParser.T__15);
        this.state = 351;
        this.name();
        this.state = 352;
        this.ablExpression();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StepModifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_stepModifier;
    return this;
}

StepModifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StepModifierContext.prototype.constructor = StepModifierContext;

StepModifierContext.prototype.IGNORE_FAILURE = function() {
    return this.getToken(ABLParser.IGNORE_FAILURE, 0);
};

StepModifierContext.prototype.EFFECT_ONLY = function() {
    return this.getToken(ABLParser.EFFECT_ONLY, 0);
};

StepModifierContext.prototype.TEAM_EFFECT_ONLY = function() {
    return this.getToken(ABLParser.TEAM_EFFECT_ONLY, 0);
};

StepModifierContext.prototype.POST = function() {
    return this.getToken(ABLParser.POST, 0);
};

StepModifierContext.prototype.POST_TO = function() {
    return this.getToken(ABLParser.POST_TO, 0);
};

StepModifierContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};

StepModifierContext.prototype.TEAMNEEDED = function() {
    return this.getToken(ABLParser.TEAMNEEDED, 0);
};

StepModifierContext.prototype.ONENEEDED = function() {
    return this.getToken(ABLParser.ONENEEDED, 0);
};

StepModifierContext.prototype.priorityModifier = function() {
    return this.getTypedRuleContext(PriorityModifierContext,0);
};

StepModifierContext.prototype.persistence = function() {
    return this.getTypedRuleContext(PersistenceContext,0);
};

StepModifierContext.prototype.namedProperty = function() {
    return this.getTypedRuleContext(NamedPropertyContext,0);
};

StepModifierContext.prototype.successTest = function() {
    return this.getTypedRuleContext(SuccessTestContext,0);
};

StepModifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterStepModifier(this);
	}
};

StepModifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitStepModifier(this);
	}
};




ABLParser.StepModifierContext = StepModifierContext;

ABLParser.prototype.stepModifier = function() {

    var localctx = new StepModifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 78, ABLParser.RULE_stepModifier);
    try {
        this.state = 366;
        switch(this._input.LA(1)) {
        case ABLParser.IGNORE_FAILURE:
            this.enterOuterAlt(localctx, 1);
            this.state = 354;
            this.match(ABLParser.IGNORE_FAILURE);
            break;
        case ABLParser.EFFECT_ONLY:
            this.enterOuterAlt(localctx, 2);
            this.state = 355;
            this.match(ABLParser.EFFECT_ONLY);
            break;
        case ABLParser.TEAM_EFFECT_ONLY:
            this.enterOuterAlt(localctx, 3);
            this.state = 356;
            this.match(ABLParser.TEAM_EFFECT_ONLY);
            break;
        case ABLParser.POST:
            this.enterOuterAlt(localctx, 4);
            this.state = 357;
            this.match(ABLParser.POST);
            break;
        case ABLParser.POST_TO:
            this.enterOuterAlt(localctx, 5);
            this.state = 358;
            this.match(ABLParser.POST_TO);
            this.state = 359;
            this.name();
            break;
        case ABLParser.TEAMNEEDED:
            this.enterOuterAlt(localctx, 6);
            this.state = 360;
            this.match(ABLParser.TEAMNEEDED);
            break;
        case ABLParser.ONENEEDED:
            this.enterOuterAlt(localctx, 7);
            this.state = 361;
            this.match(ABLParser.ONENEEDED);
            break;
        case ABLParser.T__25:
        case ABLParser.T__26:
            this.enterOuterAlt(localctx, 8);
            this.state = 362;
            this.priorityModifier();
            break;
        case ABLParser.T__27:
            this.enterOuterAlt(localctx, 9);
            this.state = 363;
            this.persistence();
            break;
        case ABLParser.T__15:
            this.enterOuterAlt(localctx, 10);
            this.state = 364;
            this.namedProperty();
            break;
        case ABLParser.T__21:
            this.enterOuterAlt(localctx, 11);
            this.state = 365;
            this.successTest();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BasicStepContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_basicStep;
    return this;
}

BasicStepContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BasicStepContext.prototype.constructor = BasicStepContext;

BasicStepContext.prototype.FAIL = function() {
    return this.getToken(ABLParser.FAIL, 0);
};

BasicStepContext.prototype.SUCCEED = function() {
    return this.getToken(ABLParser.SUCCEED, 0);
};

BasicStepContext.prototype.WAIT = function() {
    return this.getToken(ABLParser.WAIT, 0);
};

BasicStepContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterBasicStep(this);
	}
};

BasicStepContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitBasicStep(this);
	}
};




ABLParser.BasicStepContext = BasicStepContext;

ABLParser.prototype.basicStep = function() {

    var localctx = new BasicStepContext(this, this._ctx, this.state);
    this.enterRule(localctx, 80, ABLParser.RULE_basicStep);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 368;
        _la = this._input.LA(1);
        if(!(((((_la - 53)) & ~0x1f) == 0 && ((1 << (_la - 53)) & ((1 << (ABLParser.FAIL - 53)) | (1 << (ABLParser.SUCCEED - 53)) | (1 << (ABLParser.WAIT - 53)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
        this.state = 369;
        this.match(ABLParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PrimitiveActContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_primitiveAct;
    return this;
}

PrimitiveActContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrimitiveActContext.prototype.constructor = PrimitiveActContext;

PrimitiveActContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};

PrimitiveActContext.prototype.params = function() {
    return this.getTypedRuleContext(ParamsContext,0);
};

PrimitiveActContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterPrimitiveAct(this);
	}
};

PrimitiveActContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitPrimitiveAct(this);
	}
};




ABLParser.PrimitiveActContext = PrimitiveActContext;

ABLParser.prototype.primitiveAct = function() {

    var localctx = new PrimitiveActContext(this, this._ctx, this.state);
    this.enterRule(localctx, 82, ABLParser.RULE_primitiveAct);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 371;
        this.match(ABLParser.T__28);
        this.state = 372;
        this.name();
        this.state = 373;
        this.params();
        this.state = 374;
        this.match(ABLParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function GoalStepContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_goalStep;
    return this;
}

GoalStepContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
GoalStepContext.prototype.constructor = GoalStepContext;

GoalStepContext.prototype.name = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NameContext);
    } else {
        return this.getTypedRuleContext(NameContext,i);
    }
};

GoalStepContext.prototype.SUBGOAL = function() {
    return this.getToken(ABLParser.SUBGOAL, 0);
};

GoalStepContext.prototype.SPAWNGOAL = function() {
    return this.getToken(ABLParser.SPAWNGOAL, 0);
};

GoalStepContext.prototype.JOINT = function() {
    return this.getToken(ABLParser.JOINT, 0);
};

GoalStepContext.prototype.params = function() {
    return this.getTypedRuleContext(ParamsContext,0);
};

GoalStepContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterGoalStep(this);
	}
};

GoalStepContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitGoalStep(this);
	}
};




ABLParser.GoalStepContext = GoalStepContext;

ABLParser.prototype.goalStep = function() {

    var localctx = new GoalStepContext(this, this._ctx, this.state);
    this.enterRule(localctx, 84, ABLParser.RULE_goalStep);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 377;
        _la = this._input.LA(1);
        if(_la===ABLParser.JOINT) {
            this.state = 376;
            this.match(ABLParser.JOINT);
        }

        this.state = 379;
        _la = this._input.LA(1);
        if(!(_la===ABLParser.SUBGOAL || _la===ABLParser.SPAWNGOAL)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
        this.state = 380;
        this.name();
        this.state = 382;
        _la = this._input.LA(1);
        if(_la===ABLParser.T__8) {
            this.state = 381;
            this.params();
        }

        this.state = 386;
        _la = this._input.LA(1);
        if(_la===ABLParser.T__29) {
            this.state = 384;
            this.match(ABLParser.T__29);
            this.state = 385;
            this.name();
        }

        this.state = 388;
        this.match(ABLParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BehaviourStepContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_behaviourStep;
    return this;
}

BehaviourStepContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BehaviourStepContext.prototype.constructor = BehaviourStepContext;

BehaviourStepContext.prototype.goalStep = function() {
    return this.getTypedRuleContext(GoalStepContext,0);
};

BehaviourStepContext.prototype.primitiveAct = function() {
    return this.getTypedRuleContext(PrimitiveActContext,0);
};

BehaviourStepContext.prototype.basicStep = function() {
    return this.getTypedRuleContext(BasicStepContext,0);
};

BehaviourStepContext.prototype.stepModifier = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StepModifierContext);
    } else {
        return this.getTypedRuleContext(StepModifierContext,i);
    }
};

BehaviourStepContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterBehaviourStep(this);
	}
};

BehaviourStepContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitBehaviourStep(this);
	}
};




ABLParser.BehaviourStepContext = BehaviourStepContext;

ABLParser.prototype.behaviourStep = function() {

    var localctx = new BehaviourStepContext(this, this._ctx, this.state);
    this.enterRule(localctx, 86, ABLParser.RULE_behaviourStep);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 402;
        _la = this._input.LA(1);
        if(_la===ABLParser.T__7) {
            this.state = 390;
            this.match(ABLParser.T__7);
            this.state = 391;
            this.match(ABLParser.T__8);
            this.state = 392;
            this.stepModifier();
            this.state = 397;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===ABLParser.T__9) {
                this.state = 393;
                this.match(ABLParser.T__9);
                this.state = 394;
                this.stepModifier();
                this.state = 399;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 400;
            this.match(ABLParser.T__10);
        }

        this.state = 407;
        switch(this._input.LA(1)) {
        case ABLParser.SUBGOAL:
        case ABLParser.SPAWNGOAL:
        case ABLParser.JOINT:
            this.state = 404;
            this.goalStep();
            break;
        case ABLParser.T__28:
            this.state = 405;
            this.primitiveAct();
            break;
        case ABLParser.FAIL:
        case ABLParser.SUCCEED:
        case ABLParser.WAIT:
            this.state = 406;
            this.basicStep();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BehaviourDefinitionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_behaviourDefinition;
    return this;
}

BehaviourDefinitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BehaviourDefinitionContext.prototype.constructor = BehaviourDefinitionContext;

BehaviourDefinitionContext.prototype.BEH = function() {
    return this.getToken(ABLParser.BEH, 0);
};

BehaviourDefinitionContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};

BehaviourDefinitionContext.prototype.params = function() {
    return this.getTypedRuleContext(ParamsContext,0);
};

BehaviourDefinitionContext.prototype.SEQ = function() {
    return this.getToken(ABLParser.SEQ, 0);
};

BehaviourDefinitionContext.prototype.PAR = function() {
    return this.getToken(ABLParser.PAR, 0);
};

BehaviourDefinitionContext.prototype.COLL = function() {
    return this.getToken(ABLParser.COLL, 0);
};

BehaviourDefinitionContext.prototype.behaviourModifier = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BehaviourModifierContext);
    } else {
        return this.getTypedRuleContext(BehaviourModifierContext,i);
    }
};

BehaviourDefinitionContext.prototype.ablVariableDeclaration = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AblVariableDeclarationContext);
    } else {
        return this.getTypedRuleContext(AblVariableDeclarationContext,i);
    }
};

BehaviourDefinitionContext.prototype.behaviourStep = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BehaviourStepContext);
    } else {
        return this.getTypedRuleContext(BehaviourStepContext,i);
    }
};

BehaviourDefinitionContext.prototype.JOINT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ABLParser.JOINT);
    } else {
        return this.getToken(ABLParser.JOINT, i);
    }
};


BehaviourDefinitionContext.prototype.ATOMIC = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ABLParser.ATOMIC);
    } else {
        return this.getToken(ABLParser.ATOMIC, i);
    }
};


BehaviourDefinitionContext.prototype.ADAPTIVE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ABLParser.ADAPTIVE);
    } else {
        return this.getToken(ABLParser.ADAPTIVE, i);
    }
};


BehaviourDefinitionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterBehaviourDefinition(this);
	}
};

BehaviourDefinitionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitBehaviourDefinition(this);
	}
};




ABLParser.BehaviourDefinitionContext = BehaviourDefinitionContext;

ABLParser.prototype.behaviourDefinition = function() {

    var localctx = new BehaviourDefinitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 88, ABLParser.RULE_behaviourDefinition);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 412;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 66)) & ~0x1f) == 0 && ((1 << (_la - 66)) & ((1 << (ABLParser.JOINT - 66)) | (1 << (ABLParser.ATOMIC - 66)) | (1 << (ABLParser.ADAPTIVE - 66)))) !== 0)) {
            this.state = 409;
            _la = this._input.LA(1);
            if(!(((((_la - 66)) & ~0x1f) == 0 && ((1 << (_la - 66)) & ((1 << (ABLParser.JOINT - 66)) | (1 << (ABLParser.ATOMIC - 66)) | (1 << (ABLParser.ADAPTIVE - 66)))) !== 0))) {
            this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
            this.state = 414;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 415;
        _la = this._input.LA(1);
        if(!(((((_la - 59)) & ~0x1f) == 0 && ((1 << (_la - 59)) & ((1 << (ABLParser.SEQ - 59)) | (1 << (ABLParser.PAR - 59)) | (1 << (ABLParser.COLL - 59)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
        this.state = 416;
        this.match(ABLParser.BEH);
        this.state = 417;
        this.name();
        this.state = 418;
        this.params();
        this.state = 419;
        this.match(ABLParser.T__13);
        this.state = 425;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,38,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 423;
                switch(this._input.LA(1)) {
                case ABLParser.T__17:
                case ABLParser.T__18:
                case ABLParser.T__19:
                case ABLParser.T__20:
                case ABLParser.T__22:
                case ABLParser.T__23:
                case ABLParser.T__24:
                    this.state = 420;
                    this.behaviourModifier();
                    break;
                case ABLParser.TYPE:
                    this.state = 421;
                    this.ablVariableDeclaration();
                    break;
                case ABLParser.T__7:
                case ABLParser.T__28:
                case ABLParser.FAIL:
                case ABLParser.SUCCEED:
                case ABLParser.WAIT:
                case ABLParser.SUBGOAL:
                case ABLParser.SPAWNGOAL:
                case ABLParser.JOINT:
                    this.state = 422;
                    this.behaviourStep();
                    break;
                default:
                    throw new antlr4.error.NoViableAltException(this);
                } 
            }
            this.state = 427;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,38,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function InitialTreeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_initialTree;
    return this;
}

InitialTreeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InitialTreeContext.prototype.constructor = InitialTreeContext;

InitialTreeContext.prototype.behaviourStep = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BehaviourStepContext);
    } else {
        return this.getTypedRuleContext(BehaviourStepContext,i);
    }
};

InitialTreeContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterInitialTree(this);
	}
};

InitialTreeContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitInitialTree(this);
	}
};




ABLParser.InitialTreeContext = InitialTreeContext;

ABLParser.prototype.initialTree = function() {

    var localctx = new InitialTreeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 90, ABLParser.RULE_initialTree);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 428;
        this.match(ABLParser.T__30);
        this.state = 429;
        this.match(ABLParser.T__13);
        this.state = 433;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ABLParser.T__7 || _la===ABLParser.T__28 || ((((_la - 53)) & ~0x1f) == 0 && ((1 << (_la - 53)) & ((1 << (ABLParser.FAIL - 53)) | (1 << (ABLParser.SUCCEED - 53)) | (1 << (ABLParser.WAIT - 53)) | (1 << (ABLParser.SUBGOAL - 53)) | (1 << (ABLParser.SPAWNGOAL - 53)) | (1 << (ABLParser.JOINT - 53)))) !== 0)) {
            this.state = 430;
            this.behaviourStep();
            this.state = 435;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 436;
        this.match(ABLParser.T__14);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DecisionCycleSMCallDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_decisionCycleSMCallDeclaration;
    return this;
}

DecisionCycleSMCallDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DecisionCycleSMCallDeclarationContext.prototype.constructor = DecisionCycleSMCallDeclarationContext;

DecisionCycleSMCallDeclarationContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};

DecisionCycleSMCallDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterDecisionCycleSMCallDeclaration(this);
	}
};

DecisionCycleSMCallDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitDecisionCycleSMCallDeclaration(this);
	}
};




ABLParser.DecisionCycleSMCallDeclarationContext = DecisionCycleSMCallDeclarationContext;

ABLParser.prototype.decisionCycleSMCallDeclaration = function() {

    var localctx = new DecisionCycleSMCallDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 92, ABLParser.RULE_decisionCycleSMCallDeclaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 438;
        this.match(ABLParser.T__31);
        this.state = 439;
        this.name();
        this.state = 440;
        this.match(ABLParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AblDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_ablDeclaration;
    return this;
}

AblDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AblDeclarationContext.prototype.constructor = AblDeclarationContext;

AblDeclarationContext.prototype.wmeRegistration = function() {
    return this.getTypedRuleContext(WmeRegistrationContext,0);
};

AblDeclarationContext.prototype.actionRegistration = function() {
    return this.getTypedRuleContext(ActionRegistrationContext,0);
};

AblDeclarationContext.prototype.wmeDeclaration = function() {
    return this.getTypedRuleContext(WmeDeclarationContext,0);
};

AblDeclarationContext.prototype.propertyDeclaration = function() {
    return this.getTypedRuleContext(PropertyDeclarationContext,0);
};

AblDeclarationContext.prototype.ablVariableDeclaration = function() {
    return this.getTypedRuleContext(AblVariableDeclarationContext,0);
};

AblDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterAblDeclaration(this);
	}
};

AblDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitAblDeclaration(this);
	}
};




ABLParser.AblDeclarationContext = AblDeclarationContext;

ABLParser.prototype.ablDeclaration = function() {

    var localctx = new AblDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 94, ABLParser.RULE_ablDeclaration);
    try {
        this.state = 447;
        var la_ = this._interp.adaptivePredict(this._input,40,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 442;
            this.wmeRegistration();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 443;
            this.actionRegistration();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 444;
            this.wmeDeclaration();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 445;
            this.propertyDeclaration();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 446;
            this.ablVariableDeclaration();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BehavingEntityContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_behavingEntity;
    return this;
}

BehavingEntityContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BehavingEntityContext.prototype.constructor = BehavingEntityContext;

BehavingEntityContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};

BehavingEntityContext.prototype.initialTree = function() {
    return this.getTypedRuleContext(InitialTreeContext,0);
};

BehavingEntityContext.prototype.teamNeeded = function() {
    return this.getTypedRuleContext(TeamNeededContext,0);
};

BehavingEntityContext.prototype.decisionCycleSMCallDeclaration = function() {
    return this.getTypedRuleContext(DecisionCycleSMCallDeclarationContext,0);
};

BehavingEntityContext.prototype.conflictDecl = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ConflictDeclContext);
    } else {
        return this.getTypedRuleContext(ConflictDeclContext,i);
    }
};

BehavingEntityContext.prototype.ablDeclaration = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AblDeclarationContext);
    } else {
        return this.getTypedRuleContext(AblDeclarationContext,i);
    }
};

BehavingEntityContext.prototype.behaviourDefinition = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BehaviourDefinitionContext);
    } else {
        return this.getTypedRuleContext(BehaviourDefinitionContext,i);
    }
};

BehavingEntityContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterBehavingEntity(this);
	}
};

BehavingEntityContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitBehavingEntity(this);
	}
};




ABLParser.BehavingEntityContext = BehavingEntityContext;

ABLParser.prototype.behavingEntity = function() {

    var localctx = new BehavingEntityContext(this, this._ctx, this.state);
    this.enterRule(localctx, 96, ABLParser.RULE_behavingEntity);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 449;
        this.match(ABLParser.T__32);
        this.state = 450;
        this.name();
        this.state = 451;
        this.match(ABLParser.T__13);
        this.state = 453;
        _la = this._input.LA(1);
        if(_la===ABLParser.JOINTNEG) {
            this.state = 452;
            this.teamNeeded();
        }

        this.state = 456;
        _la = this._input.LA(1);
        if(_la===ABLParser.T__31) {
            this.state = 455;
            this.decisionCycleSMCallDeclaration();
        }

        this.state = 461;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ABLParser.T__4) {
            this.state = 458;
            this.conflictDecl();
            this.state = 463;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 467;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ABLParser.T__5) | (1 << ABLParser.T__6) | (1 << ABLParser.T__15))) !== 0) || _la===ABLParser.TYPE) {
            this.state = 464;
            this.ablDeclaration();
            this.state = 469;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 473;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 59)) & ~0x1f) == 0 && ((1 << (_la - 59)) & ((1 << (ABLParser.SEQ - 59)) | (1 << (ABLParser.PAR - 59)) | (1 << (ABLParser.COLL - 59)) | (1 << (ABLParser.JOINT - 59)) | (1 << (ABLParser.ATOMIC - 59)) | (1 << (ABLParser.ADAPTIVE - 59)))) !== 0)) {
            this.state = 470;
            this.behaviourDefinition();
            this.state = 475;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 476;
        this.initialTree();
        this.state = 477;
        this.match(ABLParser.T__14);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_name;
    return this;
}

NameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NameContext.prototype.constructor = NameContext;

NameContext.prototype.CHARS = function() {
    return this.getToken(ABLParser.CHARS, 0);
};

NameContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterName(this);
	}
};

NameContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitName(this);
	}
};




ABLParser.NameContext = NameContext;

ABLParser.prototype.name = function() {

    var localctx = new NameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 98, ABLParser.RULE_name);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 479;
        this.match(ABLParser.CHARS);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NameListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_nameList;
    return this;
}

NameListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NameListContext.prototype.constructor = NameListContext;

NameListContext.prototype.name = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NameContext);
    } else {
        return this.getTypedRuleContext(NameContext,i);
    }
};

NameListContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterNameList(this);
	}
};

NameListContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitNameList(this);
	}
};




ABLParser.NameListContext = NameListContext;

ABLParser.prototype.nameList = function() {

    var localctx = new NameListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 100, ABLParser.RULE_nameList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 481;
        this.name();
        this.state = 486;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ABLParser.T__9) {
            this.state = 482;
            this.match(ABLParser.T__9);
            this.state = 483;
            this.name();
            this.state = 488;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StringContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ABLParser.RULE_string;
    return this;
}

StringContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StringContext.prototype.constructor = StringContext;

StringContext.prototype.STRING = function() {
    return this.getToken(ABLParser.STRING, 0);
};

StringContext.prototype.enterRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.enterString(this);
	}
};

StringContext.prototype.exitRule = function(listener) {
    if(listener instanceof ABLListener ) {
        listener.exitString(this);
	}
};




ABLParser.StringContext = StringContext;

ABLParser.prototype.string = function() {

    var localctx = new StringContext(this, this._ctx, this.state);
    this.enterRule(localctx, 102, ABLParser.RULE_string);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 489;
        this.match(ABLParser.STRING);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.ABLParser = ABLParser;
