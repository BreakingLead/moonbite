// Generated from MiniMoonBit.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { MiniMoonBitVisitor } from "./MiniMoonBitVisitor";


export class MiniMoonBitParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly TRUE = 5;
	public static readonly FALSE = 6;
	public static readonly UNIT = 7;
	public static readonly BOOL = 8;
	public static readonly INT = 9;
	public static readonly DOUBLE = 10;
	public static readonly ARRAY = 11;
	public static readonly NOT = 12;
	public static readonly IF = 13;
	public static readonly ELSE = 14;
	public static readonly FN = 15;
	public static readonly LET = 16;
	public static readonly NUMBER = 17;
	public static readonly IDENTIFIER = 18;
	public static readonly DOT = 19;
	public static readonly ADD = 20;
	public static readonly SUB = 21;
	public static readonly MUL = 22;
	public static readonly DIV = 23;
	public static readonly ASSIGN = 24;
	public static readonly EQ = 25;
	public static readonly LE = 26;
	public static readonly LPAREN = 27;
	public static readonly RPAREN = 28;
	public static readonly LBRACKET = 29;
	public static readonly RBRACKET = 30;
	public static readonly LCURLYBRACKET = 31;
	public static readonly RCURLYBRACKET = 32;
	public static readonly ARROW = 33;
	public static readonly COLON = 34;
	public static readonly SEMICOLON = 35;
	public static readonly COMMA = 36;
	public static readonly WS = 37;
	public static readonly RULE_prog = 0;
	public static readonly RULE_top_level = 1;
	public static readonly RULE_top_let_decl = 2;
	public static readonly RULE_toplevel_fn_decl = 3;
	public static readonly RULE_main_fn_decl = 4;
	public static readonly RULE_top_fn_decl = 5;
	public static readonly RULE_param_list = 6;
	public static readonly RULE_param = 7;
	public static readonly RULE_fn_body = 8;
	public static readonly RULE_nontop_fn_decl = 9;
	public static readonly RULE_nontop_param_list = 10;
	public static readonly RULE_nontop_param = 11;
	public static readonly RULE_stmt = 12;
	public static readonly RULE_let_tuple_stmt = 13;
	public static readonly RULE_let_stmt = 14;
	public static readonly RULE_type_annotation = 15;
	public static readonly RULE_fn_decl_stmt = 16;
	public static readonly RULE_assign_stmt = 17;
	public static readonly RULE_expr_stmt = 18;
	public static readonly RULE_expr = 19;
	public static readonly RULE_add_sub_level_expr = 20;
	public static readonly RULE_mul_div_level_expr = 21;
	public static readonly RULE_if_level_expr = 22;
	public static readonly RULE_if_expr = 23;
	public static readonly RULE_get_or_apply_level_expr = 24;
	public static readonly RULE_get_expr = 25;
	public static readonly RULE_apply_expr = 26;
	public static readonly RULE_empty_apply_expr = 27;
	public static readonly RULE_nonempty_apply_expr = 28;
	public static readonly RULE_value_expr = 29;
	public static readonly RULE_unit_expr = 30;
	public static readonly RULE_tuple_expr = 31;
	public static readonly RULE_block_expr = 32;
	public static readonly RULE_bool_expr = 33;
	public static readonly RULE_neg_expr = 34;
	public static readonly RULE_floating_point_expr = 35;
	public static readonly RULE_int_expr = 36;
	public static readonly RULE_not_expr = 37;
	public static readonly RULE_array_make_expr = 38;
	public static readonly RULE_identifier_expr = 39;
	public static readonly RULE_type = 40;
	public static readonly RULE_array_type = 41;
	public static readonly RULE_tuple_type = 42;
	public static readonly RULE_function_type = 43;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"prog", "top_level", "top_let_decl", "toplevel_fn_decl", "main_fn_decl", 
		"top_fn_decl", "param_list", "param", "fn_body", "nontop_fn_decl", "nontop_param_list", 
		"nontop_param", "stmt", "let_tuple_stmt", "let_stmt", "type_annotation", 
		"fn_decl_stmt", "assign_stmt", "expr_stmt", "expr", "add_sub_level_expr", 
		"mul_div_level_expr", "if_level_expr", "if_expr", "get_or_apply_level_expr", 
		"get_expr", "apply_expr", "empty_apply_expr", "nonempty_apply_expr", "value_expr", 
		"unit_expr", "tuple_expr", "block_expr", "bool_expr", "neg_expr", "floating_point_expr", 
		"int_expr", "not_expr", "array_make_expr", "identifier_expr", "type", 
		"array_type", "tuple_type", "function_type",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'main'", "'init'", "'::'", "'make'", "'true'", "'false'", 
		"'Unit'", "'Bool'", "'Int'", "'Double'", "'Array'", "'not'", "'if'", "'else'", 
		"'fn'", "'let'", undefined, undefined, "'.'", "'+'", "'-'", "'*'", "'/'", 
		"'='", "'=='", "'<='", "'('", "')'", "'['", "']'", "'{'", "'}'", "'->'", 
		"':'", "';'", "','",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, "TRUE", "FALSE", 
		"UNIT", "BOOL", "INT", "DOUBLE", "ARRAY", "NOT", "IF", "ELSE", "FN", "LET", 
		"NUMBER", "IDENTIFIER", "DOT", "ADD", "SUB", "MUL", "DIV", "ASSIGN", "EQ", 
		"LE", "LPAREN", "RPAREN", "LBRACKET", "RBRACKET", "LCURLYBRACKET", "RCURLYBRACKET", 
		"ARROW", "COLON", "SEMICOLON", "COMMA", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(MiniMoonBitParser._LITERAL_NAMES, MiniMoonBitParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return MiniMoonBitParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "MiniMoonBit.g4"; }

	// @Override
	public get ruleNames(): string[] { return MiniMoonBitParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return MiniMoonBitParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(MiniMoonBitParser._ATN, this);
	}
	// @RuleVersion(0)
	public prog(): ProgContext {
		let _localctx: ProgContext = new ProgContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, MiniMoonBitParser.RULE_prog);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 91;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MiniMoonBitParser.FN || _la === MiniMoonBitParser.LET) {
				{
				{
				this.state = 88;
				this.top_level();
				}
				}
				this.state = 93;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 94;
			this.match(MiniMoonBitParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public top_level(): Top_levelContext {
		let _localctx: Top_levelContext = new Top_levelContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, MiniMoonBitParser.RULE_top_level);
		try {
			this.state = 98;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MiniMoonBitParser.LET:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 96;
				this.top_let_decl();
				}
				break;
			case MiniMoonBitParser.FN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 97;
				this.toplevel_fn_decl();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public top_let_decl(): Top_let_declContext {
		let _localctx: Top_let_declContext = new Top_let_declContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, MiniMoonBitParser.RULE_top_let_decl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 100;
			this.match(MiniMoonBitParser.LET);
			this.state = 101;
			this.match(MiniMoonBitParser.IDENTIFIER);
			this.state = 102;
			this.match(MiniMoonBitParser.COLON);
			this.state = 103;
			this.type();
			this.state = 104;
			this.match(MiniMoonBitParser.ASSIGN);
			this.state = 105;
			this.expr();
			this.state = 106;
			this.match(MiniMoonBitParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public toplevel_fn_decl(): Toplevel_fn_declContext {
		let _localctx: Toplevel_fn_declContext = new Toplevel_fn_declContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, MiniMoonBitParser.RULE_toplevel_fn_decl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 110;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				{
				this.state = 108;
				this.main_fn_decl();
				}
				break;

			case 2:
				{
				this.state = 109;
				this.top_fn_decl();
				}
				break;
			}
			this.state = 112;
			this.match(MiniMoonBitParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public main_fn_decl(): Main_fn_declContext {
		let _localctx: Main_fn_declContext = new Main_fn_declContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, MiniMoonBitParser.RULE_main_fn_decl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 114;
			this.match(MiniMoonBitParser.FN);
			this.state = 115;
			_la = this._input.LA(1);
			if (!(_la === MiniMoonBitParser.T__0 || _la === MiniMoonBitParser.T__1)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 116;
			this.fn_body();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public top_fn_decl(): Top_fn_declContext {
		let _localctx: Top_fn_declContext = new Top_fn_declContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, MiniMoonBitParser.RULE_top_fn_decl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 118;
			this.match(MiniMoonBitParser.FN);
			this.state = 119;
			this.match(MiniMoonBitParser.IDENTIFIER);
			this.state = 120;
			this.match(MiniMoonBitParser.LPAREN);
			this.state = 122;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === MiniMoonBitParser.IDENTIFIER) {
				{
				this.state = 121;
				this.param_list();
				}
			}

			this.state = 124;
			this.match(MiniMoonBitParser.RPAREN);
			this.state = 125;
			this.match(MiniMoonBitParser.ARROW);
			this.state = 126;
			this.type();
			this.state = 127;
			this.fn_body();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public param_list(): Param_listContext {
		let _localctx: Param_listContext = new Param_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, MiniMoonBitParser.RULE_param_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 129;
			this.param();
			this.state = 134;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MiniMoonBitParser.COMMA) {
				{
				{
				this.state = 130;
				this.match(MiniMoonBitParser.COMMA);
				this.state = 131;
				this.param();
				}
				}
				this.state = 136;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public param(): ParamContext {
		let _localctx: ParamContext = new ParamContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, MiniMoonBitParser.RULE_param);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 137;
			this.match(MiniMoonBitParser.IDENTIFIER);
			this.state = 138;
			this.type_annotation();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fn_body(): Fn_bodyContext {
		let _localctx: Fn_bodyContext = new Fn_bodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, MiniMoonBitParser.RULE_fn_body);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 140;
			this.match(MiniMoonBitParser.LCURLYBRACKET);
			this.state = 144;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MiniMoonBitParser.TRUE) | (1 << MiniMoonBitParser.FALSE) | (1 << MiniMoonBitParser.ARRAY) | (1 << MiniMoonBitParser.NOT) | (1 << MiniMoonBitParser.IF) | (1 << MiniMoonBitParser.FN) | (1 << MiniMoonBitParser.LET) | (1 << MiniMoonBitParser.NUMBER) | (1 << MiniMoonBitParser.IDENTIFIER) | (1 << MiniMoonBitParser.SUB) | (1 << MiniMoonBitParser.LPAREN) | (1 << MiniMoonBitParser.LCURLYBRACKET))) !== 0)) {
				{
				{
				this.state = 141;
				this.stmt();
				}
				}
				this.state = 146;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 147;
			this.match(MiniMoonBitParser.RCURLYBRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nontop_fn_decl(): Nontop_fn_declContext {
		let _localctx: Nontop_fn_declContext = new Nontop_fn_declContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, MiniMoonBitParser.RULE_nontop_fn_decl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 149;
			this.match(MiniMoonBitParser.FN);
			this.state = 150;
			this.match(MiniMoonBitParser.IDENTIFIER);
			this.state = 151;
			this.match(MiniMoonBitParser.LPAREN);
			this.state = 153;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === MiniMoonBitParser.IDENTIFIER) {
				{
				this.state = 152;
				this.nontop_param_list();
				}
			}

			this.state = 155;
			this.match(MiniMoonBitParser.RPAREN);
			this.state = 158;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === MiniMoonBitParser.ARROW) {
				{
				this.state = 156;
				this.match(MiniMoonBitParser.ARROW);
				this.state = 157;
				this.type();
				}
			}

			this.state = 160;
			this.fn_body();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nontop_param_list(): Nontop_param_listContext {
		let _localctx: Nontop_param_listContext = new Nontop_param_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, MiniMoonBitParser.RULE_nontop_param_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 162;
			this.nontop_param();
			this.state = 167;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MiniMoonBitParser.COMMA) {
				{
				{
				this.state = 163;
				this.match(MiniMoonBitParser.COMMA);
				this.state = 164;
				this.nontop_param();
				}
				}
				this.state = 169;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nontop_param(): Nontop_paramContext {
		let _localctx: Nontop_paramContext = new Nontop_paramContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, MiniMoonBitParser.RULE_nontop_param);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 170;
			this.match(MiniMoonBitParser.IDENTIFIER);
			this.state = 172;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === MiniMoonBitParser.COLON) {
				{
				this.state = 171;
				this.type_annotation();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stmt(): StmtContext {
		let _localctx: StmtContext = new StmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, MiniMoonBitParser.RULE_stmt);
		try {
			this.state = 179;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 174;
				this.let_tuple_stmt();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 175;
				this.let_stmt();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 176;
				this.fn_decl_stmt();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 177;
				this.assign_stmt();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 178;
				this.expr_stmt();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public let_tuple_stmt(): Let_tuple_stmtContext {
		let _localctx: Let_tuple_stmtContext = new Let_tuple_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, MiniMoonBitParser.RULE_let_tuple_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 181;
			this.match(MiniMoonBitParser.LET);
			this.state = 182;
			this.match(MiniMoonBitParser.LPAREN);
			this.state = 183;
			this.match(MiniMoonBitParser.IDENTIFIER);
			this.state = 188;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MiniMoonBitParser.COMMA) {
				{
				{
				this.state = 184;
				this.match(MiniMoonBitParser.COMMA);
				this.state = 185;
				this.match(MiniMoonBitParser.IDENTIFIER);
				}
				}
				this.state = 190;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 191;
			this.match(MiniMoonBitParser.RPAREN);
			this.state = 193;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === MiniMoonBitParser.COLON) {
				{
				this.state = 192;
				this.type_annotation();
				}
			}

			this.state = 195;
			this.match(MiniMoonBitParser.ASSIGN);
			this.state = 196;
			this.expr();
			this.state = 197;
			this.match(MiniMoonBitParser.SEMICOLON);
			this.state = 198;
			this.stmt();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public let_stmt(): Let_stmtContext {
		let _localctx: Let_stmtContext = new Let_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, MiniMoonBitParser.RULE_let_stmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 200;
			this.match(MiniMoonBitParser.LET);
			this.state = 201;
			this.match(MiniMoonBitParser.IDENTIFIER);
			this.state = 203;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === MiniMoonBitParser.COLON) {
				{
				this.state = 202;
				this.type_annotation();
				}
			}

			this.state = 205;
			this.match(MiniMoonBitParser.ASSIGN);
			this.state = 206;
			this.expr();
			this.state = 207;
			this.match(MiniMoonBitParser.SEMICOLON);
			this.state = 208;
			this.stmt();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public type_annotation(): Type_annotationContext {
		let _localctx: Type_annotationContext = new Type_annotationContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, MiniMoonBitParser.RULE_type_annotation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 210;
			this.match(MiniMoonBitParser.COLON);
			this.state = 211;
			this.type();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fn_decl_stmt(): Fn_decl_stmtContext {
		let _localctx: Fn_decl_stmtContext = new Fn_decl_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, MiniMoonBitParser.RULE_fn_decl_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 213;
			this.top_fn_decl();
			this.state = 214;
			this.match(MiniMoonBitParser.SEMICOLON);
			this.state = 215;
			this.stmt();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assign_stmt(): Assign_stmtContext {
		let _localctx: Assign_stmtContext = new Assign_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, MiniMoonBitParser.RULE_assign_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 217;
			this.get_expr();
			this.state = 218;
			this.match(MiniMoonBitParser.ASSIGN);
			this.state = 219;
			this.expr();
			this.state = 220;
			this.match(MiniMoonBitParser.SEMICOLON);
			this.state = 221;
			this.stmt();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expr_stmt(): Expr_stmtContext {
		let _localctx: Expr_stmtContext = new Expr_stmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, MiniMoonBitParser.RULE_expr_stmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 223;
			this.expr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expr(): ExprContext {
		let _localctx: ExprContext = new ExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, MiniMoonBitParser.RULE_expr);
		try {
			this.state = 234;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 225;
				this.add_sub_level_expr();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 226;
				this.add_sub_level_expr();
				this.state = 227;
				this.match(MiniMoonBitParser.EQ);
				this.state = 228;
				this.expr();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 230;
				this.add_sub_level_expr();
				this.state = 231;
				this.match(MiniMoonBitParser.LE);
				this.state = 232;
				this.expr();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public add_sub_level_expr(): Add_sub_level_exprContext {
		let _localctx: Add_sub_level_exprContext = new Add_sub_level_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, MiniMoonBitParser.RULE_add_sub_level_expr);
		try {
			this.state = 245;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 236;
				this.mul_div_level_expr();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 237;
				this.mul_div_level_expr();
				this.state = 238;
				this.match(MiniMoonBitParser.ADD);
				this.state = 239;
				this.add_sub_level_expr();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 241;
				this.mul_div_level_expr();
				this.state = 242;
				this.match(MiniMoonBitParser.SUB);
				this.state = 243;
				this.add_sub_level_expr();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mul_div_level_expr(): Mul_div_level_exprContext {
		let _localctx: Mul_div_level_exprContext = new Mul_div_level_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, MiniMoonBitParser.RULE_mul_div_level_expr);
		try {
			this.state = 256;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 247;
				this.if_level_expr();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 248;
				this.if_level_expr();
				this.state = 249;
				this.match(MiniMoonBitParser.MUL);
				this.state = 250;
				this.mul_div_level_expr();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 252;
				this.if_level_expr();
				this.state = 253;
				this.match(MiniMoonBitParser.DIV);
				this.state = 254;
				this.mul_div_level_expr();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public if_level_expr(): If_level_exprContext {
		let _localctx: If_level_exprContext = new If_level_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, MiniMoonBitParser.RULE_if_level_expr);
		try {
			this.state = 260;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MiniMoonBitParser.TRUE:
			case MiniMoonBitParser.FALSE:
			case MiniMoonBitParser.ARRAY:
			case MiniMoonBitParser.NOT:
			case MiniMoonBitParser.NUMBER:
			case MiniMoonBitParser.IDENTIFIER:
			case MiniMoonBitParser.SUB:
			case MiniMoonBitParser.LPAREN:
			case MiniMoonBitParser.LCURLYBRACKET:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 258;
				this.get_or_apply_level_expr();
				}
				break;
			case MiniMoonBitParser.IF:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 259;
				this.if_expr();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public if_expr(): If_exprContext {
		let _localctx: If_exprContext = new If_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, MiniMoonBitParser.RULE_if_expr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 262;
			this.match(MiniMoonBitParser.IF);
			this.state = 263;
			this.expr();
			this.state = 264;
			this.block_expr();
			this.state = 267;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === MiniMoonBitParser.ELSE) {
				{
				this.state = 265;
				this.match(MiniMoonBitParser.ELSE);
				this.state = 266;
				this.block_expr();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public get_or_apply_level_expr(): Get_or_apply_level_exprContext {
		let _localctx: Get_or_apply_level_exprContext = new Get_or_apply_level_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, MiniMoonBitParser.RULE_get_or_apply_level_expr);
		try {
			this.state = 272;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 269;
				this.get_expr();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 270;
				this.apply_expr();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 271;
				this.value_expr();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public get_expr(): Get_exprContext {
		let _localctx: Get_exprContext = new Get_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, MiniMoonBitParser.RULE_get_expr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 274;
			this.value_expr();
			this.state = 275;
			this.match(MiniMoonBitParser.LBRACKET);
			this.state = 276;
			this.expr();
			this.state = 277;
			this.match(MiniMoonBitParser.RBRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public apply_expr(): Apply_exprContext {
		let _localctx: Apply_exprContext = new Apply_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, MiniMoonBitParser.RULE_apply_expr);
		try {
			this.state = 281;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 279;
				this.empty_apply_expr();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 280;
				this.nonempty_apply_expr();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public empty_apply_expr(): Empty_apply_exprContext {
		let _localctx: Empty_apply_exprContext = new Empty_apply_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, MiniMoonBitParser.RULE_empty_apply_expr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 283;
			this.value_expr();
			this.state = 284;
			this.match(MiniMoonBitParser.LPAREN);
			this.state = 285;
			this.match(MiniMoonBitParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nonempty_apply_expr(): Nonempty_apply_exprContext {
		let _localctx: Nonempty_apply_exprContext = new Nonempty_apply_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, MiniMoonBitParser.RULE_nonempty_apply_expr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 287;
			this.value_expr();
			this.state = 288;
			this.match(MiniMoonBitParser.LPAREN);
			this.state = 289;
			this.expr();
			this.state = 294;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MiniMoonBitParser.COMMA) {
				{
				{
				this.state = 290;
				this.match(MiniMoonBitParser.COMMA);
				this.state = 291;
				this.expr();
				}
				}
				this.state = 296;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 297;
			this.match(MiniMoonBitParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public value_expr(): Value_exprContext {
		let _localctx: Value_exprContext = new Value_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, MiniMoonBitParser.RULE_value_expr);
		try {
			this.state = 309;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 299;
				this.unit_expr();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 300;
				this.tuple_expr();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 301;
				this.bool_expr();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 302;
				this.identifier_expr();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 303;
				this.block_expr();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 304;
				this.neg_expr();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 305;
				this.floating_point_expr();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 306;
				this.int_expr();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 307;
				this.not_expr();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 308;
				this.array_make_expr();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unit_expr(): Unit_exprContext {
		let _localctx: Unit_exprContext = new Unit_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, MiniMoonBitParser.RULE_unit_expr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 311;
			this.match(MiniMoonBitParser.LPAREN);
			this.state = 312;
			this.match(MiniMoonBitParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tuple_expr(): Tuple_exprContext {
		let _localctx: Tuple_exprContext = new Tuple_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, MiniMoonBitParser.RULE_tuple_expr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 314;
			this.match(MiniMoonBitParser.LPAREN);
			this.state = 315;
			this.expr();
			this.state = 320;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MiniMoonBitParser.COMMA) {
				{
				{
				this.state = 316;
				this.match(MiniMoonBitParser.COMMA);
				this.state = 317;
				this.expr();
				}
				}
				this.state = 322;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 323;
			this.match(MiniMoonBitParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block_expr(): Block_exprContext {
		let _localctx: Block_exprContext = new Block_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, MiniMoonBitParser.RULE_block_expr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 325;
			this.match(MiniMoonBitParser.LCURLYBRACKET);
			this.state = 326;
			this.stmt();
			this.state = 327;
			this.match(MiniMoonBitParser.RCURLYBRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bool_expr(): Bool_exprContext {
		let _localctx: Bool_exprContext = new Bool_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, MiniMoonBitParser.RULE_bool_expr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 329;
			_la = this._input.LA(1);
			if (!(_la === MiniMoonBitParser.TRUE || _la === MiniMoonBitParser.FALSE)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public neg_expr(): Neg_exprContext {
		let _localctx: Neg_exprContext = new Neg_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, MiniMoonBitParser.RULE_neg_expr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 331;
			this.match(MiniMoonBitParser.SUB);
			this.state = 332;
			this.value_expr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public floating_point_expr(): Floating_point_exprContext {
		let _localctx: Floating_point_exprContext = new Floating_point_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, MiniMoonBitParser.RULE_floating_point_expr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 334;
			this.match(MiniMoonBitParser.NUMBER);
			this.state = 335;
			this.match(MiniMoonBitParser.DOT);
			this.state = 337;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				{
				this.state = 336;
				this.match(MiniMoonBitParser.NUMBER);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public int_expr(): Int_exprContext {
		let _localctx: Int_exprContext = new Int_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, MiniMoonBitParser.RULE_int_expr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 339;
			this.match(MiniMoonBitParser.NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public not_expr(): Not_exprContext {
		let _localctx: Not_exprContext = new Not_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, MiniMoonBitParser.RULE_not_expr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 341;
			this.match(MiniMoonBitParser.NOT);
			this.state = 342;
			this.match(MiniMoonBitParser.LPAREN);
			this.state = 343;
			this.expr();
			this.state = 344;
			this.match(MiniMoonBitParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public array_make_expr(): Array_make_exprContext {
		let _localctx: Array_make_exprContext = new Array_make_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, MiniMoonBitParser.RULE_array_make_expr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 346;
			this.match(MiniMoonBitParser.ARRAY);
			this.state = 347;
			this.match(MiniMoonBitParser.T__2);
			this.state = 348;
			this.match(MiniMoonBitParser.T__3);
			this.state = 349;
			this.match(MiniMoonBitParser.LPAREN);
			this.state = 350;
			this.expr();
			this.state = 351;
			this.match(MiniMoonBitParser.COMMA);
			this.state = 352;
			this.expr();
			this.state = 353;
			this.match(MiniMoonBitParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifier_expr(): Identifier_exprContext {
		let _localctx: Identifier_exprContext = new Identifier_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, MiniMoonBitParser.RULE_identifier_expr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 355;
			this.match(MiniMoonBitParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public type(): TypeContext {
		let _localctx: TypeContext = new TypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, MiniMoonBitParser.RULE_type);
		try {
			this.state = 364;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 357;
				this.match(MiniMoonBitParser.UNIT);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 358;
				this.match(MiniMoonBitParser.BOOL);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 359;
				this.match(MiniMoonBitParser.INT);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 360;
				this.match(MiniMoonBitParser.DOUBLE);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 361;
				this.array_type();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 362;
				this.tuple_type();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 363;
				this.function_type();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public array_type(): Array_typeContext {
		let _localctx: Array_typeContext = new Array_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, MiniMoonBitParser.RULE_array_type);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 366;
			this.match(MiniMoonBitParser.ARRAY);
			this.state = 367;
			this.match(MiniMoonBitParser.LBRACKET);
			this.state = 368;
			this.type();
			this.state = 369;
			this.match(MiniMoonBitParser.RBRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tuple_type(): Tuple_typeContext {
		let _localctx: Tuple_typeContext = new Tuple_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, MiniMoonBitParser.RULE_tuple_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 371;
			this.match(MiniMoonBitParser.LPAREN);
			this.state = 372;
			this.type();
			this.state = 377;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MiniMoonBitParser.COMMA) {
				{
				{
				this.state = 373;
				this.match(MiniMoonBitParser.COMMA);
				this.state = 374;
				this.type();
				}
				}
				this.state = 379;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 380;
			this.match(MiniMoonBitParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public function_type(): Function_typeContext {
		let _localctx: Function_typeContext = new Function_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, MiniMoonBitParser.RULE_function_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 382;
			this.match(MiniMoonBitParser.LPAREN);
			this.state = 383;
			this.type();
			this.state = 388;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MiniMoonBitParser.COMMA) {
				{
				{
				this.state = 384;
				this.match(MiniMoonBitParser.COMMA);
				this.state = 385;
				this.type();
				}
				}
				this.state = 390;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 391;
			this.match(MiniMoonBitParser.RPAREN);
			this.state = 392;
			this.match(MiniMoonBitParser.ARROW);
			this.state = 393;
			this.type();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\'\u018E\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x03\x02\x07\x02\\\n\x02\f\x02\x0E\x02_\v\x02\x03\x02" +
		"\x03\x02\x03\x03\x03\x03\x05\x03e\n\x03\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x05\x05q\n\x05\x03\x05" +
		"\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x05\x07}\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03" +
		"\b\x07\b\x87\n\b\f\b\x0E\b\x8A\v\b\x03\t\x03\t\x03\t\x03\n\x03\n\x07\n" +
		"\x91\n\n\f\n\x0E\n\x94\v\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x05\v\x9C" +
		"\n\v\x03\v\x03\v\x03\v\x05\v\xA1\n\v\x03\v\x03\v\x03\f\x03\f\x03\f\x07" +
		"\f\xA8\n\f\f\f\x0E\f\xAB\v\f\x03\r\x03\r\x05\r\xAF\n\r\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x05\x0E\xB6\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x07\x0F\xBD\n\x0F\f\x0F\x0E\x0F\xC0\v\x0F\x03\x0F\x03\x0F" +
		"\x05\x0F\xC4\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03" +
		"\x10\x03\x10\x05\x10\xCE\n\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13" +
		"\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15" +
		"\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\xED\n\x15\x03" +
		"\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x05" +
		"\x16\xF8\n\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17" +
		"\x03\x17\x03\x17\x05\x17\u0103\n\x17\x03\x18\x03\x18\x05\x18\u0107\n\x18" +
		"\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19\u010E\n\x19\x03\x1A\x03" +
		"\x1A\x03\x1A\x05\x1A\u0113\n\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B" +
		"\x03\x1C\x03\x1C\x05\x1C\u011C\n\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03" +
		"\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x07\x1E\u0127\n\x1E\f\x1E\x0E\x1E" +
		"\u012A\v\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03" +
		"\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u0138\n\x1F\x03 \x03 \x03" +
		" \x03!\x03!\x03!\x03!\x07!\u0141\n!\f!\x0E!\u0144\v!\x03!\x03!\x03\"\x03" +
		"\"\x03\"\x03\"\x03#\x03#\x03$\x03$\x03$\x03%\x03%\x03%\x05%\u0154\n%\x03" +
		"&\x03&\x03\'\x03\'\x03\'\x03\'\x03\'\x03(\x03(\x03(\x03(\x03(\x03(\x03" +
		"(\x03(\x03(\x03)\x03)\x03*\x03*\x03*\x03*\x03*\x03*\x03*\x05*\u016F\n" +
		"*\x03+\x03+\x03+\x03+\x03+\x03,\x03,\x03,\x03,\x07,\u017A\n,\f,\x0E,\u017D" +
		"\v,\x03,\x03,\x03-\x03-\x03-\x03-\x07-\u0185\n-\f-\x0E-\u0188\v-\x03-" +
		"\x03-\x03-\x03-\x03-\x02\x02\x02.\x02\x02\x04\x02\x06\x02\b\x02\n\x02" +
		"\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02" +
		"\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x02" +
		"8\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02" +
		"T\x02V\x02X\x02\x02\x04\x03\x02\x03\x04\x03\x02\x07\b\x02\u0191\x02]\x03" +
		"\x02\x02\x02\x04d\x03\x02\x02\x02\x06f\x03\x02\x02\x02\bp\x03\x02\x02" +
		"\x02\nt\x03\x02\x02\x02\fx\x03\x02\x02\x02\x0E\x83\x03\x02\x02\x02\x10" +
		"\x8B\x03\x02\x02\x02\x12\x8E\x03\x02\x02\x02\x14\x97\x03\x02\x02\x02\x16" +
		"\xA4\x03\x02\x02\x02\x18\xAC\x03\x02\x02\x02\x1A\xB5\x03\x02\x02\x02\x1C" +
		"\xB7\x03\x02\x02\x02\x1E\xCA\x03\x02\x02\x02 \xD4\x03\x02\x02\x02\"\xD7" +
		"\x03\x02\x02\x02$\xDB\x03\x02\x02\x02&\xE1\x03\x02\x02\x02(\xEC\x03\x02" +
		"\x02\x02*\xF7\x03\x02\x02\x02,\u0102\x03\x02\x02\x02.\u0106\x03\x02\x02" +
		"\x020\u0108\x03\x02\x02\x022\u0112\x03\x02\x02\x024\u0114\x03\x02\x02" +
		"\x026\u011B\x03\x02\x02\x028\u011D\x03\x02\x02\x02:\u0121\x03\x02\x02" +
		"\x02<\u0137\x03\x02\x02\x02>\u0139\x03\x02\x02\x02@\u013C\x03\x02\x02" +
		"\x02B\u0147\x03\x02\x02\x02D\u014B\x03\x02\x02\x02F\u014D\x03\x02\x02" +
		"\x02H\u0150\x03\x02\x02\x02J\u0155\x03\x02\x02\x02L\u0157\x03\x02\x02" +
		"\x02N\u015C\x03\x02\x02\x02P\u0165\x03\x02\x02\x02R\u016E\x03\x02\x02" +
		"\x02T\u0170\x03\x02\x02\x02V\u0175\x03\x02\x02\x02X\u0180\x03\x02\x02" +
		"\x02Z\\\x05\x04\x03\x02[Z\x03\x02\x02\x02\\_\x03\x02\x02\x02][\x03\x02" +
		"\x02\x02]^\x03\x02\x02\x02^`\x03\x02\x02\x02_]\x03\x02\x02\x02`a\x07\x02" +
		"\x02\x03a\x03\x03\x02\x02\x02be\x05\x06\x04\x02ce\x05\b\x05\x02db\x03" +
		"\x02\x02\x02dc\x03\x02\x02\x02e\x05\x03\x02\x02\x02fg\x07\x12\x02\x02" +
		"gh\x07\x14\x02\x02hi\x07$\x02\x02ij\x05R*\x02jk\x07\x1A\x02\x02kl\x05" +
		"(\x15\x02lm\x07%\x02\x02m\x07\x03\x02\x02\x02nq\x05\n\x06\x02oq\x05\f" +
		"\x07\x02pn\x03\x02\x02\x02po\x03\x02\x02\x02qr\x03\x02\x02\x02rs\x07%" +
		"\x02\x02s\t\x03\x02\x02\x02tu\x07\x11\x02\x02uv\t\x02\x02\x02vw\x05\x12" +
		"\n\x02w\v\x03\x02\x02\x02xy\x07\x11\x02\x02yz\x07\x14\x02\x02z|\x07\x1D" +
		"\x02\x02{}\x05\x0E\b\x02|{\x03\x02\x02\x02|}\x03\x02\x02\x02}~\x03\x02" +
		"\x02\x02~\x7F\x07\x1E\x02\x02\x7F\x80\x07#\x02\x02\x80\x81\x05R*\x02\x81" +
		"\x82\x05\x12\n\x02\x82\r\x03\x02\x02\x02\x83\x88\x05\x10\t\x02\x84\x85" +
		"\x07&\x02\x02\x85\x87\x05\x10\t\x02\x86\x84\x03\x02\x02\x02\x87\x8A\x03" +
		"\x02\x02\x02\x88\x86\x03\x02\x02\x02\x88\x89\x03\x02\x02\x02\x89\x0F\x03" +
		"\x02\x02\x02\x8A\x88\x03\x02\x02\x02\x8B\x8C\x07\x14\x02\x02\x8C\x8D\x05" +
		" \x11\x02\x8D\x11\x03\x02\x02\x02\x8E\x92\x07!\x02\x02\x8F\x91\x05\x1A" +
		"\x0E\x02\x90\x8F\x03\x02\x02\x02\x91\x94\x03\x02\x02\x02\x92\x90\x03\x02" +
		"\x02\x02\x92\x93\x03\x02\x02\x02\x93\x95\x03\x02\x02\x02\x94\x92\x03\x02" +
		"\x02\x02\x95\x96\x07\"\x02\x02\x96\x13\x03\x02\x02\x02\x97\x98\x07\x11" +
		"\x02\x02\x98\x99\x07\x14\x02\x02\x99\x9B\x07\x1D\x02\x02\x9A\x9C\x05\x16" +
		"\f\x02\x9B\x9A\x03\x02\x02\x02\x9B\x9C\x03\x02\x02\x02\x9C\x9D\x03\x02" +
		"\x02\x02\x9D\xA0\x07\x1E\x02\x02\x9E\x9F\x07#\x02\x02\x9F\xA1\x05R*\x02" +
		"\xA0\x9E\x03\x02\x02\x02\xA0\xA1\x03\x02\x02\x02\xA1\xA2\x03\x02\x02\x02" +
		"\xA2\xA3\x05\x12\n\x02\xA3\x15\x03\x02\x02\x02\xA4\xA9\x05\x18\r\x02\xA5" +
		"\xA6\x07&\x02\x02\xA6\xA8\x05\x18\r\x02\xA7\xA5\x03\x02\x02\x02\xA8\xAB" +
		"\x03\x02\x02\x02\xA9\xA7\x03\x02\x02\x02\xA9\xAA\x03\x02\x02\x02\xAA\x17" +
		"\x03\x02\x02\x02\xAB\xA9\x03\x02\x02\x02\xAC\xAE\x07\x14\x02\x02\xAD\xAF" +
		"\x05 \x11\x02\xAE\xAD\x03\x02\x02\x02\xAE\xAF\x03\x02\x02\x02\xAF\x19" +
		"\x03\x02\x02\x02\xB0\xB6\x05\x1C\x0F\x02\xB1\xB6\x05\x1E\x10\x02\xB2\xB6" +
		"\x05\"\x12\x02\xB3\xB6\x05$\x13\x02\xB4\xB6\x05&\x14\x02\xB5\xB0\x03\x02" +
		"\x02\x02\xB5\xB1\x03\x02\x02\x02\xB5\xB2\x03\x02\x02\x02\xB5\xB3\x03\x02" +
		"\x02\x02\xB5\xB4\x03\x02\x02\x02\xB6\x1B\x03\x02\x02\x02\xB7\xB8\x07\x12" +
		"\x02\x02\xB8\xB9\x07\x1D\x02\x02\xB9\xBE\x07\x14\x02\x02\xBA\xBB\x07&" +
		"\x02\x02\xBB\xBD\x07\x14\x02\x02\xBC\xBA\x03\x02\x02\x02\xBD\xC0\x03\x02" +
		"\x02\x02\xBE\xBC\x03\x02\x02\x02\xBE\xBF\x03\x02\x02\x02\xBF\xC1\x03\x02" +
		"\x02\x02\xC0\xBE\x03\x02\x02\x02\xC1\xC3\x07\x1E\x02\x02\xC2\xC4\x05 " +
		"\x11\x02\xC3\xC2\x03\x02\x02\x02\xC3\xC4\x03\x02\x02\x02\xC4\xC5\x03\x02" +
		"\x02\x02\xC5\xC6\x07\x1A\x02\x02\xC6\xC7\x05(\x15\x02\xC7\xC8\x07%\x02" +
		"\x02\xC8\xC9\x05\x1A\x0E\x02\xC9\x1D\x03\x02\x02\x02\xCA\xCB\x07\x12\x02" +
		"\x02\xCB\xCD\x07\x14\x02\x02\xCC\xCE\x05 \x11\x02\xCD\xCC\x03\x02\x02" +
		"\x02\xCD\xCE\x03\x02\x02\x02\xCE\xCF\x03\x02\x02\x02\xCF\xD0\x07\x1A\x02" +
		"\x02\xD0\xD1\x05(\x15\x02\xD1\xD2\x07%\x02\x02\xD2\xD3\x05\x1A\x0E\x02" +
		"\xD3\x1F\x03\x02\x02\x02\xD4\xD5\x07$\x02\x02\xD5\xD6\x05R*\x02\xD6!\x03" +
		"\x02\x02\x02\xD7\xD8\x05\f\x07\x02\xD8\xD9\x07%\x02\x02\xD9\xDA\x05\x1A" +
		"\x0E\x02\xDA#\x03\x02\x02\x02\xDB\xDC\x054\x1B\x02\xDC\xDD\x07\x1A\x02" +
		"\x02\xDD\xDE\x05(\x15\x02\xDE\xDF\x07%\x02\x02\xDF\xE0\x05\x1A\x0E\x02" +
		"\xE0%\x03\x02\x02\x02\xE1\xE2\x05(\x15\x02\xE2\'\x03\x02\x02\x02\xE3\xED" +
		"\x05*\x16\x02\xE4\xE5\x05*\x16\x02\xE5\xE6\x07\x1B\x02\x02\xE6\xE7\x05" +
		"(\x15\x02\xE7\xED\x03\x02\x02\x02\xE8\xE9\x05*\x16\x02\xE9\xEA\x07\x1C" +
		"\x02\x02\xEA\xEB\x05(\x15\x02\xEB\xED\x03\x02\x02\x02\xEC\xE3\x03\x02" +
		"\x02\x02\xEC\xE4\x03\x02\x02\x02\xEC\xE8\x03\x02\x02\x02\xED)\x03\x02" +
		"\x02\x02\xEE\xF8\x05,\x17\x02\xEF\xF0\x05,\x17\x02\xF0\xF1\x07\x16\x02" +
		"\x02\xF1\xF2\x05*\x16\x02\xF2\xF8\x03\x02\x02\x02\xF3\xF4\x05,\x17\x02" +
		"\xF4\xF5\x07\x17\x02\x02\xF5\xF6\x05*\x16\x02\xF6\xF8\x03\x02\x02\x02" +
		"\xF7\xEE\x03\x02\x02\x02\xF7\xEF\x03\x02\x02\x02\xF7\xF3\x03\x02\x02\x02" +
		"\xF8+\x03\x02\x02\x02\xF9\u0103\x05.\x18\x02\xFA\xFB\x05.\x18\x02\xFB" +
		"\xFC\x07\x18\x02\x02\xFC\xFD\x05,\x17\x02\xFD\u0103\x03\x02\x02\x02\xFE" +
		"\xFF\x05.\x18\x02\xFF\u0100\x07\x19\x02\x02\u0100\u0101\x05,\x17\x02\u0101" +
		"\u0103\x03\x02\x02\x02\u0102\xF9\x03\x02\x02\x02\u0102\xFA\x03\x02\x02" +
		"\x02\u0102\xFE\x03\x02\x02\x02\u0103-\x03\x02\x02\x02\u0104\u0107\x05" +
		"2\x1A\x02\u0105\u0107\x050\x19\x02\u0106\u0104\x03\x02\x02\x02\u0106\u0105" +
		"\x03\x02\x02\x02\u0107/\x03\x02\x02\x02\u0108\u0109\x07\x0F\x02\x02\u0109" +
		"\u010A\x05(\x15\x02\u010A\u010D\x05B\"\x02\u010B\u010C\x07\x10\x02\x02" +
		"\u010C\u010E\x05B\"\x02\u010D\u010B\x03\x02\x02\x02\u010D\u010E\x03\x02" +
		"\x02\x02\u010E1\x03\x02\x02\x02\u010F\u0113\x054\x1B\x02\u0110\u0113\x05" +
		"6\x1C\x02\u0111\u0113\x05<\x1F\x02\u0112\u010F\x03\x02\x02\x02\u0112\u0110" +
		"\x03\x02\x02\x02\u0112\u0111\x03\x02\x02\x02\u01133\x03\x02\x02\x02\u0114" +
		"\u0115\x05<\x1F\x02\u0115\u0116\x07\x1F\x02\x02\u0116\u0117\x05(\x15\x02" +
		"\u0117\u0118\x07 \x02\x02\u01185\x03\x02\x02\x02\u0119\u011C\x058\x1D" +
		"\x02\u011A\u011C\x05:\x1E\x02\u011B\u0119\x03\x02\x02\x02\u011B\u011A" +
		"\x03\x02\x02\x02\u011C7\x03\x02\x02\x02\u011D\u011E\x05<\x1F\x02\u011E" +
		"\u011F\x07\x1D\x02\x02\u011F\u0120\x07\x1E\x02\x02\u01209\x03\x02\x02" +
		"\x02\u0121\u0122\x05<\x1F\x02\u0122\u0123\x07\x1D\x02\x02\u0123\u0128" +
		"\x05(\x15\x02\u0124\u0125\x07&\x02\x02\u0125\u0127\x05(\x15\x02\u0126" +
		"\u0124\x03\x02\x02\x02\u0127\u012A\x03\x02\x02\x02\u0128\u0126\x03\x02" +
		"\x02\x02\u0128\u0129\x03\x02\x02\x02\u0129\u012B\x03\x02\x02\x02\u012A" +
		"\u0128\x03\x02\x02\x02\u012B\u012C\x07\x1E\x02\x02\u012C;\x03\x02\x02" +
		"\x02\u012D\u0138\x05> \x02\u012E\u0138\x05@!\x02\u012F\u0138\x05D#\x02" +
		"\u0130\u0138\x05P)\x02\u0131\u0138\x05B\"\x02\u0132\u0138\x05F$\x02\u0133" +
		"\u0138\x05H%\x02\u0134\u0138\x05J&\x02\u0135\u0138\x05L\'\x02\u0136\u0138" +
		"\x05N(\x02\u0137\u012D\x03\x02\x02\x02\u0137\u012E\x03\x02\x02\x02\u0137" +
		"\u012F\x03\x02\x02\x02\u0137\u0130\x03\x02\x02\x02\u0137\u0131\x03\x02" +
		"\x02\x02\u0137\u0132\x03\x02\x02\x02\u0137\u0133\x03\x02\x02\x02\u0137" +
		"\u0134\x03\x02\x02\x02\u0137\u0135\x03\x02\x02\x02\u0137\u0136\x03\x02" +
		"\x02\x02\u0138=\x03\x02\x02\x02\u0139\u013A\x07\x1D\x02\x02\u013A\u013B" +
		"\x07\x1E\x02\x02\u013B?\x03\x02\x02\x02\u013C\u013D\x07\x1D\x02\x02\u013D" +
		"\u0142\x05(\x15\x02\u013E\u013F\x07&\x02\x02\u013F\u0141\x05(\x15\x02" +
		"\u0140\u013E\x03\x02\x02\x02\u0141\u0144\x03\x02\x02\x02\u0142\u0140\x03" +
		"\x02\x02\x02\u0142\u0143\x03\x02\x02\x02\u0143\u0145\x03\x02\x02\x02\u0144" +
		"\u0142\x03\x02\x02\x02\u0145\u0146\x07\x1E\x02\x02\u0146A\x03\x02\x02" +
		"\x02\u0147\u0148\x07!\x02\x02\u0148\u0149\x05\x1A\x0E\x02\u0149\u014A" +
		"\x07\"\x02\x02\u014AC\x03\x02\x02\x02\u014B\u014C\t\x03\x02\x02\u014C" +
		"E\x03\x02\x02\x02\u014D\u014E\x07\x17\x02\x02\u014E\u014F\x05<\x1F\x02" +
		"\u014FG\x03\x02\x02\x02\u0150\u0151\x07\x13\x02\x02\u0151\u0153\x07\x15" +
		"\x02\x02\u0152\u0154\x07\x13\x02\x02\u0153\u0152\x03\x02\x02\x02\u0153" +
		"\u0154\x03\x02\x02\x02\u0154I\x03\x02\x02\x02\u0155\u0156\x07\x13\x02" +
		"\x02\u0156K\x03\x02\x02\x02\u0157\u0158\x07\x0E\x02\x02\u0158\u0159\x07" +
		"\x1D\x02\x02\u0159\u015A\x05(\x15\x02\u015A\u015B\x07\x1E\x02\x02\u015B" +
		"M\x03\x02\x02\x02\u015C\u015D\x07\r\x02\x02\u015D\u015E\x07\x05\x02\x02" +
		"\u015E\u015F\x07\x06\x02\x02\u015F\u0160\x07\x1D\x02\x02\u0160\u0161\x05" +
		"(\x15\x02\u0161\u0162\x07&\x02\x02\u0162\u0163\x05(\x15\x02\u0163\u0164" +
		"\x07\x1E\x02\x02\u0164O\x03\x02\x02\x02\u0165\u0166\x07\x14\x02\x02\u0166" +
		"Q\x03\x02\x02\x02\u0167\u016F\x07\t\x02\x02\u0168\u016F\x07\n\x02\x02" +
		"\u0169\u016F\x07\v\x02\x02\u016A\u016F\x07\f\x02\x02\u016B\u016F\x05T" +
		"+\x02\u016C\u016F\x05V,\x02\u016D\u016F\x05X-\x02\u016E\u0167\x03\x02" +
		"\x02\x02\u016E\u0168\x03\x02\x02\x02\u016E\u0169\x03\x02\x02\x02\u016E" +
		"\u016A\x03\x02\x02\x02\u016E\u016B\x03\x02\x02\x02\u016E\u016C\x03\x02" +
		"\x02\x02\u016E\u016D\x03\x02\x02\x02\u016FS\x03\x02\x02\x02\u0170\u0171" +
		"\x07\r\x02\x02\u0171\u0172\x07\x1F\x02\x02\u0172\u0173\x05R*\x02\u0173" +
		"\u0174\x07 \x02\x02\u0174U\x03\x02\x02\x02\u0175\u0176\x07\x1D\x02\x02" +
		"\u0176\u017B\x05R*\x02\u0177\u0178\x07&\x02\x02\u0178\u017A\x05R*\x02" +
		"\u0179\u0177\x03\x02\x02\x02\u017A\u017D\x03\x02\x02\x02\u017B\u0179\x03" +
		"\x02\x02\x02\u017B\u017C\x03\x02\x02\x02\u017C\u017E\x03\x02\x02\x02\u017D" +
		"\u017B\x03\x02\x02\x02\u017E\u017F\x07\x1E\x02\x02\u017FW\x03\x02\x02" +
		"\x02\u0180\u0181\x07\x1D\x02\x02\u0181\u0186\x05R*\x02\u0182\u0183\x07" +
		"&\x02\x02\u0183\u0185\x05R*\x02\u0184\u0182\x03\x02\x02\x02\u0185\u0188" +
		"\x03\x02\x02\x02\u0186\u0184\x03\x02\x02\x02\u0186\u0187\x03\x02\x02\x02" +
		"\u0187\u0189\x03\x02\x02\x02\u0188\u0186\x03\x02\x02\x02\u0189\u018A\x07" +
		"\x1E\x02\x02\u018A\u018B\x07#\x02\x02\u018B\u018C\x05R*\x02\u018CY\x03" +
		"\x02\x02\x02\x1E]dp|\x88\x92\x9B\xA0\xA9\xAE\xB5\xBE\xC3\xCD\xEC\xF7\u0102" +
		"\u0106\u010D\u0112\u011B\u0128\u0137\u0142\u0153\u016E\u017B\u0186";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MiniMoonBitParser.__ATN) {
			MiniMoonBitParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(MiniMoonBitParser._serializedATN));
		}

		return MiniMoonBitParser.__ATN;
	}

}

export class ProgContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(MiniMoonBitParser.EOF, 0); }
	public top_level(): Top_levelContext[];
	public top_level(i: number): Top_levelContext;
	public top_level(i?: number): Top_levelContext | Top_levelContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Top_levelContext);
		} else {
			return this.getRuleContext(i, Top_levelContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MiniMoonBitParser.RULE_prog; }
	// @Override
	public accept<Result>(visitor: MiniMoonBitVisitor<Result>): Result {
		if (visitor.visitProg) {
			return visitor.visitProg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Top_levelContext extends ParserRuleContext {
	public top_let_decl(): Top_let_declContext | undefined {
		return this.tryGetRuleContext(0, Top_let_declContext);
	}
	public toplevel_fn_decl(): Toplevel_fn_declContext | undefined {
		return this.tryGetRuleContext(0, Toplevel_fn_declContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MiniMoonBitParser.RULE_top_level; }
	// @Override
	public accept<Result>(visitor: MiniMoonBitVisitor<Result>): Result {
		if (visitor.visitTop_level) {
			return visitor.visitTop_level(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Top_let_declContext extends ParserRuleContext {
	public LET(): TerminalNode { return this.getToken(MiniMoonBitParser.LET, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(MiniMoonBitParser.IDENTIFIER, 0); }
	public COLON(): TerminalNode { return this.getToken(MiniMoonBitParser.COLON, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public ASSIGN(): TerminalNode { return this.getToken(MiniMoonBitParser.ASSIGN, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(MiniMoonBitParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MiniMoonBitParser.RULE_top_let_decl; }
	// @Override
	public accept<Result>(visitor: MiniMoonBitVisitor<Result>): Result {
		if (visitor.visitTop_let_decl) {
			return visitor.visitTop_let_decl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Toplevel_fn_declContext extends ParserRuleContext {
	public SEMICOLON(): TerminalNode { return this.getToken(MiniMoonBitParser.SEMICOLON, 0); }
	public main_fn_decl(): Main_fn_declContext | undefined {
		return this.tryGetRuleContext(0, Main_fn_declContext);
	}
	public top_fn_decl(): Top_fn_declContext | undefined {
		return this.tryGetRuleContext(0, Top_fn_declContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MiniMoonBitParser.RULE_toplevel_fn_decl; }
	// @Override
	public accept<Result>(visitor: MiniMoonBitVisitor<Result>): Result {
		if (visitor.visitToplevel_fn_decl) {
			return visitor.visitToplevel_fn_decl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Main_fn_declContext extends ParserRuleContext {
	public FN(): TerminalNode { return this.getToken(MiniMoonBitParser.FN, 0); }
	public fn_body(): Fn_bodyContext {
		return this.getRuleContext(0, Fn_bodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MiniMoonBitParser.RULE_main_fn_decl; }
	// @Override
	public accept<Result>(visitor: MiniMoonBitVisitor<Result>): Result {
		if (visitor.visitMain_fn_decl) {
			return visitor.visitMain_fn_decl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Top_fn_declContext extends ParserRuleContext {
	public FN(): TerminalNode { return this.getToken(MiniMoonBitParser.FN, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(MiniMoonBitParser.IDENTIFIER, 0); }
	public LPAREN(): TerminalNode { return this.getToken(MiniMoonBitParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(MiniMoonBitParser.RPAREN, 0); }
	public ARROW(): TerminalNode { return this.getToken(MiniMoonBitParser.ARROW, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public fn_body(): Fn_bodyContext {
		return this.getRuleContext(0, Fn_bodyContext);
	}
	public param_list(): Param_listContext | undefined {
		return this.tryGetRuleContext(0, Param_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MiniMoonBitParser.RULE_top_fn_decl; }
	// @Override
	public accept<Result>(visitor: MiniMoonBitVisitor<Result>): Result {
		if (visitor.visitTop_fn_decl) {
			return visitor.visitTop_fn_decl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Param_listContext extends ParserRuleContext {
	public param(): ParamContext[];
	public param(i: number): ParamContext;
	public param(i?: number): ParamContext | ParamContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParamContext);
		} else {
			return this.getRuleContext(i, ParamContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MiniMoonBitParser.COMMA);
		} else {
			return this.getToken(MiniMoonBitParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MiniMoonBitParser.RULE_param_list; }
	// @Override
	public accept<Result>(visitor: MiniMoonBitVisitor<Result>): Result {
		if (visitor.visitParam_list) {
			return visitor.visitParam_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParamContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(MiniMoonBitParser.IDENTIFIER, 0); }
	public type_annotation(): Type_annotationContext {
		return this.getRuleContext(0, Type_annotationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MiniMoonBitParser.RULE_param; }
	// @Override
	public accept<Result>(visitor: MiniMoonBitVisitor<Result>): Result {
		if (visitor.visitParam) {
			return visitor.visitParam(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Fn_bodyContext extends ParserRuleContext {
	public LCURLYBRACKET(): TerminalNode { return this.getToken(MiniMoonBitParser.LCURLYBRACKET, 0); }
	public RCURLYBRACKET(): TerminalNode { return this.getToken(MiniMoonBitParser.RCURLYBRACKET, 0); }
	public stmt(): StmtContext[];
	public stmt(i: number): StmtContext;
	public stmt(i?: number): StmtContext | StmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StmtContext);
		} else {
			return this.getRuleContext(i, StmtContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MiniMoonBitParser.RULE_fn_body; }
	// @Override
	public accept<Result>(visitor: MiniMoonBitVisitor<Result>): Result {
		if (visitor.visitFn_body) {
			return visitor.visitFn_body(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Nontop_fn_declContext extends ParserRuleContext {
	public FN(): TerminalNode { return this.getToken(MiniMoonBitParser.FN, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(MiniMoonBitParser.IDENTIFIER, 0); }
	public LPAREN(): TerminalNode { return this.getToken(MiniMoonBitParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(MiniMoonBitParser.RPAREN, 0); }
	public fn_body(): Fn_bodyContext {
		return this.getRuleContext(0, Fn_bodyContext);
	}
	public nontop_param_list(): Nontop_param_listContext | undefined {
		return this.tryGetRuleContext(0, Nontop_param_listContext);
	}
	public ARROW(): TerminalNode | undefined { return this.tryGetToken(MiniMoonBitParser.ARROW, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MiniMoonBitParser.RULE_nontop_fn_decl; }
	// @Override
	public accept<Result>(visitor: MiniMoonBitVisitor<Result>): Result {
		if (visitor.visitNontop_fn_decl) {
			return visitor.visitNontop_fn_decl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Nontop_param_listContext extends ParserRuleContext {
	public nontop_param(): Nontop_paramContext[];
	public nontop_param(i: number): Nontop_paramContext;
	public nontop_param(i?: number): Nontop_paramContext | Nontop_paramContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Nontop_paramContext);
		} else {
			return this.getRuleContext(i, Nontop_paramContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MiniMoonBitParser.COMMA);
		} else {
			return this.getToken(MiniMoonBitParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MiniMoonBitParser.RULE_nontop_param_list; }
	// @Override
	public accept<Result>(visitor: MiniMoonBitVisitor<Result>): Result {
		if (visitor.visitNontop_param_list) {
			return visitor.visitNontop_param_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Nontop_paramContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(MiniMoonBitParser.IDENTIFIER, 0); }
	public type_annotation(): Type_annotationContext | undefined {
		return this.tryGetRuleContext(0, Type_annotationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MiniMoonBitParser.RULE_nontop_param; }
	// @Override
	public accept<Result>(visitor: MiniMoonBitVisitor<Result>): Result {
		if (visitor.visitNontop_param) {
			return visitor.visitNontop_param(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StmtContext extends ParserRuleContext {
	public let_tuple_stmt(): Let_tuple_stmtContext | undefined {
		return this.tryGetRuleContext(0, Let_tuple_stmtContext);
	}
	public let_stmt(): Let_stmtContext | undefined {
		return this.tryGetRuleContext(0, Let_stmtContext);
	}
	public fn_decl_stmt(): Fn_decl_stmtContext | undefined {
		return this.tryGetRuleContext(0, Fn_decl_stmtContext);
	}
	public assign_stmt(): Assign_stmtContext | undefined {
		return this.tryGetRuleContext(0, Assign_stmtContext);
	}
	public expr_stmt(): Expr_stmtContext | undefined {
		return this.tryGetRuleContext(0, Expr_stmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MiniMoonBitParser.RULE_stmt; }
	// @Override
	public accept<Result>(visitor: MiniMoonBitVisitor<Result>): Result {
		if (visitor.visitStmt) {
			return visitor.visitStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Let_tuple_stmtContext extends ParserRuleContext {
	public LET(): TerminalNode { return this.getToken(MiniMoonBitParser.LET, 0); }
	public LPAREN(): TerminalNode { return this.getToken(MiniMoonBitParser.LPAREN, 0); }
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MiniMoonBitParser.IDENTIFIER);
		} else {
			return this.getToken(MiniMoonBitParser.IDENTIFIER, i);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(MiniMoonBitParser.RPAREN, 0); }
	public ASSIGN(): TerminalNode { return this.getToken(MiniMoonBitParser.ASSIGN, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(MiniMoonBitParser.SEMICOLON, 0); }
	public stmt(): StmtContext {
		return this.getRuleContext(0, StmtContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MiniMoonBitParser.COMMA);
		} else {
			return this.getToken(MiniMoonBitParser.COMMA, i);
		}
	}
	public type_annotation(): Type_annotationContext | undefined {
		return this.tryGetRuleContext(0, Type_annotationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MiniMoonBitParser.RULE_let_tuple_stmt; }
	// @Override
	public accept<Result>(visitor: MiniMoonBitVisitor<Result>): Result {
		if (visitor.visitLet_tuple_stmt) {
			return visitor.visitLet_tuple_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Let_stmtContext extends ParserRuleContext {
	public LET(): TerminalNode { return this.getToken(MiniMoonBitParser.LET, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(MiniMoonBitParser.IDENTIFIER, 0); }
	public ASSIGN(): TerminalNode { return this.getToken(MiniMoonBitParser.ASSIGN, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(MiniMoonBitParser.SEMICOLON, 0); }
	public stmt(): StmtContext {
		return this.getRuleContext(0, StmtContext);
	}
	public type_annotation(): Type_annotationContext | undefined {
		return this.tryGetRuleContext(0, Type_annotationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MiniMoonBitParser.RULE_let_stmt; }
	// @Override
	public accept<Result>(visitor: MiniMoonBitVisitor<Result>): Result {
		if (visitor.visitLet_stmt) {
			return visitor.visitLet_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Type_annotationContext extends ParserRuleContext {
	public COLON(): TerminalNode { return this.getToken(MiniMoonBitParser.COLON, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MiniMoonBitParser.RULE_type_annotation; }
	// @Override
	public accept<Result>(visitor: MiniMoonBitVisitor<Result>): Result {
		if (visitor.visitType_annotation) {
			return visitor.visitType_annotation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Fn_decl_stmtContext extends ParserRuleContext {
	public top_fn_decl(): Top_fn_declContext {
		return this.getRuleContext(0, Top_fn_declContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(MiniMoonBitParser.SEMICOLON, 0); }
	public stmt(): StmtContext {
		return this.getRuleContext(0, StmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MiniMoonBitParser.RULE_fn_decl_stmt; }
	// @Override
	public accept<Result>(visitor: MiniMoonBitVisitor<Result>): Result {
		if (visitor.visitFn_decl_stmt) {
			return visitor.visitFn_decl_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Assign_stmtContext extends ParserRuleContext {
	public get_expr(): Get_exprContext {
		return this.getRuleContext(0, Get_exprContext);
	}
	public ASSIGN(): TerminalNode { return this.getToken(MiniMoonBitParser.ASSIGN, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(MiniMoonBitParser.SEMICOLON, 0); }
	public stmt(): StmtContext {
		return this.getRuleContext(0, StmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MiniMoonBitParser.RULE_assign_stmt; }
	// @Override
	public accept<Result>(visitor: MiniMoonBitVisitor<Result>): Result {
		if (visitor.visitAssign_stmt) {
			return visitor.visitAssign_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expr_stmtContext extends ParserRuleContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MiniMoonBitParser.RULE_expr_stmt; }
	// @Override
	public accept<Result>(visitor: MiniMoonBitVisitor<Result>): Result {
		if (visitor.visitExpr_stmt) {
			return visitor.visitExpr_stmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	public add_sub_level_expr(): Add_sub_level_exprContext {
		return this.getRuleContext(0, Add_sub_level_exprContext);
	}
	public EQ(): TerminalNode | undefined { return this.tryGetToken(MiniMoonBitParser.EQ, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public LE(): TerminalNode | undefined { return this.tryGetToken(MiniMoonBitParser.LE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MiniMoonBitParser.RULE_expr; }
	// @Override
	public accept<Result>(visitor: MiniMoonBitVisitor<Result>): Result {
		if (visitor.visitExpr) {
			return visitor.visitExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Add_sub_level_exprContext extends ParserRuleContext {
	public mul_div_level_expr(): Mul_div_level_exprContext {
		return this.getRuleContext(0, Mul_div_level_exprContext);
	}
	public ADD(): TerminalNode | undefined { return this.tryGetToken(MiniMoonBitParser.ADD, 0); }
	public add_sub_level_expr(): Add_sub_level_exprContext | undefined {
		return this.tryGetRuleContext(0, Add_sub_level_exprContext);
	}
	public SUB(): TerminalNode | undefined { return this.tryGetToken(MiniMoonBitParser.SUB, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MiniMoonBitParser.RULE_add_sub_level_expr; }
	// @Override
	public accept<Result>(visitor: MiniMoonBitVisitor<Result>): Result {
		if (visitor.visitAdd_sub_level_expr) {
			return visitor.visitAdd_sub_level_expr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Mul_div_level_exprContext extends ParserRuleContext {
	public if_level_expr(): If_level_exprContext {
		return this.getRuleContext(0, If_level_exprContext);
	}
	public MUL(): TerminalNode | undefined { return this.tryGetToken(MiniMoonBitParser.MUL, 0); }
	public mul_div_level_expr(): Mul_div_level_exprContext | undefined {
		return this.tryGetRuleContext(0, Mul_div_level_exprContext);
	}
	public DIV(): TerminalNode | undefined { return this.tryGetToken(MiniMoonBitParser.DIV, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MiniMoonBitParser.RULE_mul_div_level_expr; }
	// @Override
	public accept<Result>(visitor: MiniMoonBitVisitor<Result>): Result {
		if (visitor.visitMul_div_level_expr) {
			return visitor.visitMul_div_level_expr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class If_level_exprContext extends ParserRuleContext {
	public get_or_apply_level_expr(): Get_or_apply_level_exprContext | undefined {
		return this.tryGetRuleContext(0, Get_or_apply_level_exprContext);
	}
	public if_expr(): If_exprContext | undefined {
		return this.tryGetRuleContext(0, If_exprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MiniMoonBitParser.RULE_if_level_expr; }
	// @Override
	public accept<Result>(visitor: MiniMoonBitVisitor<Result>): Result {
		if (visitor.visitIf_level_expr) {
			return visitor.visitIf_level_expr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class If_exprContext extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(MiniMoonBitParser.IF, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public block_expr(): Block_exprContext[];
	public block_expr(i: number): Block_exprContext;
	public block_expr(i?: number): Block_exprContext | Block_exprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Block_exprContext);
		} else {
			return this.getRuleContext(i, Block_exprContext);
		}
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(MiniMoonBitParser.ELSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MiniMoonBitParser.RULE_if_expr; }
	// @Override
	public accept<Result>(visitor: MiniMoonBitVisitor<Result>): Result {
		if (visitor.visitIf_expr) {
			return visitor.visitIf_expr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Get_or_apply_level_exprContext extends ParserRuleContext {
	public get_expr(): Get_exprContext | undefined {
		return this.tryGetRuleContext(0, Get_exprContext);
	}
	public apply_expr(): Apply_exprContext | undefined {
		return this.tryGetRuleContext(0, Apply_exprContext);
	}
	public value_expr(): Value_exprContext | undefined {
		return this.tryGetRuleContext(0, Value_exprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MiniMoonBitParser.RULE_get_or_apply_level_expr; }
	// @Override
	public accept<Result>(visitor: MiniMoonBitVisitor<Result>): Result {
		if (visitor.visitGet_or_apply_level_expr) {
			return visitor.visitGet_or_apply_level_expr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Get_exprContext extends ParserRuleContext {
	public value_expr(): Value_exprContext {
		return this.getRuleContext(0, Value_exprContext);
	}
	public LBRACKET(): TerminalNode { return this.getToken(MiniMoonBitParser.LBRACKET, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public RBRACKET(): TerminalNode { return this.getToken(MiniMoonBitParser.RBRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MiniMoonBitParser.RULE_get_expr; }
	// @Override
	public accept<Result>(visitor: MiniMoonBitVisitor<Result>): Result {
		if (visitor.visitGet_expr) {
			return visitor.visitGet_expr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Apply_exprContext extends ParserRuleContext {
	public empty_apply_expr(): Empty_apply_exprContext | undefined {
		return this.tryGetRuleContext(0, Empty_apply_exprContext);
	}
	public nonempty_apply_expr(): Nonempty_apply_exprContext | undefined {
		return this.tryGetRuleContext(0, Nonempty_apply_exprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MiniMoonBitParser.RULE_apply_expr; }
	// @Override
	public accept<Result>(visitor: MiniMoonBitVisitor<Result>): Result {
		if (visitor.visitApply_expr) {
			return visitor.visitApply_expr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Empty_apply_exprContext extends ParserRuleContext {
	public value_expr(): Value_exprContext {
		return this.getRuleContext(0, Value_exprContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(MiniMoonBitParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(MiniMoonBitParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MiniMoonBitParser.RULE_empty_apply_expr; }
	// @Override
	public accept<Result>(visitor: MiniMoonBitVisitor<Result>): Result {
		if (visitor.visitEmpty_apply_expr) {
			return visitor.visitEmpty_apply_expr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Nonempty_apply_exprContext extends ParserRuleContext {
	public value_expr(): Value_exprContext {
		return this.getRuleContext(0, Value_exprContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(MiniMoonBitParser.LPAREN, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(MiniMoonBitParser.RPAREN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MiniMoonBitParser.COMMA);
		} else {
			return this.getToken(MiniMoonBitParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MiniMoonBitParser.RULE_nonempty_apply_expr; }
	// @Override
	public accept<Result>(visitor: MiniMoonBitVisitor<Result>): Result {
		if (visitor.visitNonempty_apply_expr) {
			return visitor.visitNonempty_apply_expr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Value_exprContext extends ParserRuleContext {
	public unit_expr(): Unit_exprContext | undefined {
		return this.tryGetRuleContext(0, Unit_exprContext);
	}
	public tuple_expr(): Tuple_exprContext | undefined {
		return this.tryGetRuleContext(0, Tuple_exprContext);
	}
	public bool_expr(): Bool_exprContext | undefined {
		return this.tryGetRuleContext(0, Bool_exprContext);
	}
	public identifier_expr(): Identifier_exprContext | undefined {
		return this.tryGetRuleContext(0, Identifier_exprContext);
	}
	public block_expr(): Block_exprContext | undefined {
		return this.tryGetRuleContext(0, Block_exprContext);
	}
	public neg_expr(): Neg_exprContext | undefined {
		return this.tryGetRuleContext(0, Neg_exprContext);
	}
	public floating_point_expr(): Floating_point_exprContext | undefined {
		return this.tryGetRuleContext(0, Floating_point_exprContext);
	}
	public int_expr(): Int_exprContext | undefined {
		return this.tryGetRuleContext(0, Int_exprContext);
	}
	public not_expr(): Not_exprContext | undefined {
		return this.tryGetRuleContext(0, Not_exprContext);
	}
	public array_make_expr(): Array_make_exprContext | undefined {
		return this.tryGetRuleContext(0, Array_make_exprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MiniMoonBitParser.RULE_value_expr; }
	// @Override
	public accept<Result>(visitor: MiniMoonBitVisitor<Result>): Result {
		if (visitor.visitValue_expr) {
			return visitor.visitValue_expr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Unit_exprContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(MiniMoonBitParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(MiniMoonBitParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MiniMoonBitParser.RULE_unit_expr; }
	// @Override
	public accept<Result>(visitor: MiniMoonBitVisitor<Result>): Result {
		if (visitor.visitUnit_expr) {
			return visitor.visitUnit_expr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Tuple_exprContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(MiniMoonBitParser.LPAREN, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(MiniMoonBitParser.RPAREN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MiniMoonBitParser.COMMA);
		} else {
			return this.getToken(MiniMoonBitParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MiniMoonBitParser.RULE_tuple_expr; }
	// @Override
	public accept<Result>(visitor: MiniMoonBitVisitor<Result>): Result {
		if (visitor.visitTuple_expr) {
			return visitor.visitTuple_expr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Block_exprContext extends ParserRuleContext {
	public LCURLYBRACKET(): TerminalNode { return this.getToken(MiniMoonBitParser.LCURLYBRACKET, 0); }
	public stmt(): StmtContext {
		return this.getRuleContext(0, StmtContext);
	}
	public RCURLYBRACKET(): TerminalNode { return this.getToken(MiniMoonBitParser.RCURLYBRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MiniMoonBitParser.RULE_block_expr; }
	// @Override
	public accept<Result>(visitor: MiniMoonBitVisitor<Result>): Result {
		if (visitor.visitBlock_expr) {
			return visitor.visitBlock_expr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Bool_exprContext extends ParserRuleContext {
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(MiniMoonBitParser.TRUE, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(MiniMoonBitParser.FALSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MiniMoonBitParser.RULE_bool_expr; }
	// @Override
	public accept<Result>(visitor: MiniMoonBitVisitor<Result>): Result {
		if (visitor.visitBool_expr) {
			return visitor.visitBool_expr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Neg_exprContext extends ParserRuleContext {
	public SUB(): TerminalNode { return this.getToken(MiniMoonBitParser.SUB, 0); }
	public value_expr(): Value_exprContext {
		return this.getRuleContext(0, Value_exprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MiniMoonBitParser.RULE_neg_expr; }
	// @Override
	public accept<Result>(visitor: MiniMoonBitVisitor<Result>): Result {
		if (visitor.visitNeg_expr) {
			return visitor.visitNeg_expr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Floating_point_exprContext extends ParserRuleContext {
	public NUMBER(): TerminalNode[];
	public NUMBER(i: number): TerminalNode;
	public NUMBER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MiniMoonBitParser.NUMBER);
		} else {
			return this.getToken(MiniMoonBitParser.NUMBER, i);
		}
	}
	public DOT(): TerminalNode { return this.getToken(MiniMoonBitParser.DOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MiniMoonBitParser.RULE_floating_point_expr; }
	// @Override
	public accept<Result>(visitor: MiniMoonBitVisitor<Result>): Result {
		if (visitor.visitFloating_point_expr) {
			return visitor.visitFloating_point_expr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Int_exprContext extends ParserRuleContext {
	public NUMBER(): TerminalNode { return this.getToken(MiniMoonBitParser.NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MiniMoonBitParser.RULE_int_expr; }
	// @Override
	public accept<Result>(visitor: MiniMoonBitVisitor<Result>): Result {
		if (visitor.visitInt_expr) {
			return visitor.visitInt_expr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Not_exprContext extends ParserRuleContext {
	public NOT(): TerminalNode { return this.getToken(MiniMoonBitParser.NOT, 0); }
	public LPAREN(): TerminalNode { return this.getToken(MiniMoonBitParser.LPAREN, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(MiniMoonBitParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MiniMoonBitParser.RULE_not_expr; }
	// @Override
	public accept<Result>(visitor: MiniMoonBitVisitor<Result>): Result {
		if (visitor.visitNot_expr) {
			return visitor.visitNot_expr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Array_make_exprContext extends ParserRuleContext {
	public ARRAY(): TerminalNode { return this.getToken(MiniMoonBitParser.ARRAY, 0); }
	public LPAREN(): TerminalNode { return this.getToken(MiniMoonBitParser.LPAREN, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public COMMA(): TerminalNode { return this.getToken(MiniMoonBitParser.COMMA, 0); }
	public RPAREN(): TerminalNode { return this.getToken(MiniMoonBitParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MiniMoonBitParser.RULE_array_make_expr; }
	// @Override
	public accept<Result>(visitor: MiniMoonBitVisitor<Result>): Result {
		if (visitor.visitArray_make_expr) {
			return visitor.visitArray_make_expr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Identifier_exprContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(MiniMoonBitParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MiniMoonBitParser.RULE_identifier_expr; }
	// @Override
	public accept<Result>(visitor: MiniMoonBitVisitor<Result>): Result {
		if (visitor.visitIdentifier_expr) {
			return visitor.visitIdentifier_expr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	public UNIT(): TerminalNode | undefined { return this.tryGetToken(MiniMoonBitParser.UNIT, 0); }
	public BOOL(): TerminalNode | undefined { return this.tryGetToken(MiniMoonBitParser.BOOL, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(MiniMoonBitParser.INT, 0); }
	public DOUBLE(): TerminalNode | undefined { return this.tryGetToken(MiniMoonBitParser.DOUBLE, 0); }
	public array_type(): Array_typeContext | undefined {
		return this.tryGetRuleContext(0, Array_typeContext);
	}
	public tuple_type(): Tuple_typeContext | undefined {
		return this.tryGetRuleContext(0, Tuple_typeContext);
	}
	public function_type(): Function_typeContext | undefined {
		return this.tryGetRuleContext(0, Function_typeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MiniMoonBitParser.RULE_type; }
	// @Override
	public accept<Result>(visitor: MiniMoonBitVisitor<Result>): Result {
		if (visitor.visitType) {
			return visitor.visitType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Array_typeContext extends ParserRuleContext {
	public ARRAY(): TerminalNode { return this.getToken(MiniMoonBitParser.ARRAY, 0); }
	public LBRACKET(): TerminalNode { return this.getToken(MiniMoonBitParser.LBRACKET, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public RBRACKET(): TerminalNode { return this.getToken(MiniMoonBitParser.RBRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MiniMoonBitParser.RULE_array_type; }
	// @Override
	public accept<Result>(visitor: MiniMoonBitVisitor<Result>): Result {
		if (visitor.visitArray_type) {
			return visitor.visitArray_type(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Tuple_typeContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(MiniMoonBitParser.LPAREN, 0); }
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(MiniMoonBitParser.RPAREN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MiniMoonBitParser.COMMA);
		} else {
			return this.getToken(MiniMoonBitParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MiniMoonBitParser.RULE_tuple_type; }
	// @Override
	public accept<Result>(visitor: MiniMoonBitVisitor<Result>): Result {
		if (visitor.visitTuple_type) {
			return visitor.visitTuple_type(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Function_typeContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(MiniMoonBitParser.LPAREN, 0); }
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(MiniMoonBitParser.RPAREN, 0); }
	public ARROW(): TerminalNode { return this.getToken(MiniMoonBitParser.ARROW, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MiniMoonBitParser.COMMA);
		} else {
			return this.getToken(MiniMoonBitParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MiniMoonBitParser.RULE_function_type; }
	// @Override
	public accept<Result>(visitor: MiniMoonBitVisitor<Result>): Result {
		if (visitor.visitFunction_type) {
			return visitor.visitFunction_type(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


