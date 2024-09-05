// Generated from MiniMoonBit.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ProgContext } from "./MiniMoonBitParser";
import { Top_levelContext } from "./MiniMoonBitParser";
import { Top_let_declContext } from "./MiniMoonBitParser";
import { Toplevel_fn_declContext } from "./MiniMoonBitParser";
import { Main_fn_declContext } from "./MiniMoonBitParser";
import { Top_fn_declContext } from "./MiniMoonBitParser";
import { Param_listContext } from "./MiniMoonBitParser";
import { ParamContext } from "./MiniMoonBitParser";
import { Fn_bodyContext } from "./MiniMoonBitParser";
import { Nontop_fn_declContext } from "./MiniMoonBitParser";
import { Nontop_param_listContext } from "./MiniMoonBitParser";
import { Nontop_paramContext } from "./MiniMoonBitParser";
import { StmtContext } from "./MiniMoonBitParser";
import { Let_tuple_stmtContext } from "./MiniMoonBitParser";
import { Let_stmtContext } from "./MiniMoonBitParser";
import { Type_annotationContext } from "./MiniMoonBitParser";
import { Fn_decl_stmtContext } from "./MiniMoonBitParser";
import { Assign_stmtContext } from "./MiniMoonBitParser";
import { Expr_stmtContext } from "./MiniMoonBitParser";
import { ExprContext } from "./MiniMoonBitParser";
import { Add_sub_level_exprContext } from "./MiniMoonBitParser";
import { Mul_div_level_exprContext } from "./MiniMoonBitParser";
import { If_level_exprContext } from "./MiniMoonBitParser";
import { If_exprContext } from "./MiniMoonBitParser";
import { Get_or_apply_level_exprContext } from "./MiniMoonBitParser";
import { Get_exprContext } from "./MiniMoonBitParser";
import { Apply_exprContext } from "./MiniMoonBitParser";
import { Empty_apply_exprContext } from "./MiniMoonBitParser";
import { Nonempty_apply_exprContext } from "./MiniMoonBitParser";
import { Value_exprContext } from "./MiniMoonBitParser";
import { Unit_exprContext } from "./MiniMoonBitParser";
import { Tuple_exprContext } from "./MiniMoonBitParser";
import { Block_exprContext } from "./MiniMoonBitParser";
import { Bool_exprContext } from "./MiniMoonBitParser";
import { Neg_exprContext } from "./MiniMoonBitParser";
import { Floating_point_exprContext } from "./MiniMoonBitParser";
import { Int_exprContext } from "./MiniMoonBitParser";
import { Not_exprContext } from "./MiniMoonBitParser";
import { Array_make_exprContext } from "./MiniMoonBitParser";
import { Identifier_exprContext } from "./MiniMoonBitParser";
import { TypeContext } from "./MiniMoonBitParser";
import { Array_typeContext } from "./MiniMoonBitParser";
import { Tuple_typeContext } from "./MiniMoonBitParser";
import { Function_typeContext } from "./MiniMoonBitParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `MiniMoonBitParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface MiniMoonBitVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `MiniMoonBitParser.prog`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProg?: (ctx: ProgContext) => Result;

	/**
	 * Visit a parse tree produced by `MiniMoonBitParser.top_level`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTop_level?: (ctx: Top_levelContext) => Result;

	/**
	 * Visit a parse tree produced by `MiniMoonBitParser.top_let_decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTop_let_decl?: (ctx: Top_let_declContext) => Result;

	/**
	 * Visit a parse tree produced by `MiniMoonBitParser.toplevel_fn_decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitToplevel_fn_decl?: (ctx: Toplevel_fn_declContext) => Result;

	/**
	 * Visit a parse tree produced by `MiniMoonBitParser.main_fn_decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMain_fn_decl?: (ctx: Main_fn_declContext) => Result;

	/**
	 * Visit a parse tree produced by `MiniMoonBitParser.top_fn_decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTop_fn_decl?: (ctx: Top_fn_declContext) => Result;

	/**
	 * Visit a parse tree produced by `MiniMoonBitParser.param_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParam_list?: (ctx: Param_listContext) => Result;

	/**
	 * Visit a parse tree produced by `MiniMoonBitParser.param`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParam?: (ctx: ParamContext) => Result;

	/**
	 * Visit a parse tree produced by `MiniMoonBitParser.fn_body`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFn_body?: (ctx: Fn_bodyContext) => Result;

	/**
	 * Visit a parse tree produced by `MiniMoonBitParser.nontop_fn_decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNontop_fn_decl?: (ctx: Nontop_fn_declContext) => Result;

	/**
	 * Visit a parse tree produced by `MiniMoonBitParser.nontop_param_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNontop_param_list?: (ctx: Nontop_param_listContext) => Result;

	/**
	 * Visit a parse tree produced by `MiniMoonBitParser.nontop_param`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNontop_param?: (ctx: Nontop_paramContext) => Result;

	/**
	 * Visit a parse tree produced by `MiniMoonBitParser.stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStmt?: (ctx: StmtContext) => Result;

	/**
	 * Visit a parse tree produced by `MiniMoonBitParser.let_tuple_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLet_tuple_stmt?: (ctx: Let_tuple_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `MiniMoonBitParser.let_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLet_stmt?: (ctx: Let_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `MiniMoonBitParser.type_annotation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_annotation?: (ctx: Type_annotationContext) => Result;

	/**
	 * Visit a parse tree produced by `MiniMoonBitParser.fn_decl_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFn_decl_stmt?: (ctx: Fn_decl_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `MiniMoonBitParser.assign_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssign_stmt?: (ctx: Assign_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `MiniMoonBitParser.expr_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr_stmt?: (ctx: Expr_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `MiniMoonBitParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr?: (ctx: ExprContext) => Result;

	/**
	 * Visit a parse tree produced by `MiniMoonBitParser.add_sub_level_expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdd_sub_level_expr?: (ctx: Add_sub_level_exprContext) => Result;

	/**
	 * Visit a parse tree produced by `MiniMoonBitParser.mul_div_level_expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMul_div_level_expr?: (ctx: Mul_div_level_exprContext) => Result;

	/**
	 * Visit a parse tree produced by `MiniMoonBitParser.if_level_expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIf_level_expr?: (ctx: If_level_exprContext) => Result;

	/**
	 * Visit a parse tree produced by `MiniMoonBitParser.if_expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIf_expr?: (ctx: If_exprContext) => Result;

	/**
	 * Visit a parse tree produced by `MiniMoonBitParser.get_or_apply_level_expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGet_or_apply_level_expr?: (ctx: Get_or_apply_level_exprContext) => Result;

	/**
	 * Visit a parse tree produced by `MiniMoonBitParser.get_expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGet_expr?: (ctx: Get_exprContext) => Result;

	/**
	 * Visit a parse tree produced by `MiniMoonBitParser.apply_expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitApply_expr?: (ctx: Apply_exprContext) => Result;

	/**
	 * Visit a parse tree produced by `MiniMoonBitParser.empty_apply_expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmpty_apply_expr?: (ctx: Empty_apply_exprContext) => Result;

	/**
	 * Visit a parse tree produced by `MiniMoonBitParser.nonempty_apply_expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNonempty_apply_expr?: (ctx: Nonempty_apply_exprContext) => Result;

	/**
	 * Visit a parse tree produced by `MiniMoonBitParser.value_expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue_expr?: (ctx: Value_exprContext) => Result;

	/**
	 * Visit a parse tree produced by `MiniMoonBitParser.unit_expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnit_expr?: (ctx: Unit_exprContext) => Result;

	/**
	 * Visit a parse tree produced by `MiniMoonBitParser.tuple_expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTuple_expr?: (ctx: Tuple_exprContext) => Result;

	/**
	 * Visit a parse tree produced by `MiniMoonBitParser.block_expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock_expr?: (ctx: Block_exprContext) => Result;

	/**
	 * Visit a parse tree produced by `MiniMoonBitParser.bool_expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBool_expr?: (ctx: Bool_exprContext) => Result;

	/**
	 * Visit a parse tree produced by `MiniMoonBitParser.neg_expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNeg_expr?: (ctx: Neg_exprContext) => Result;

	/**
	 * Visit a parse tree produced by `MiniMoonBitParser.floating_point_expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFloating_point_expr?: (ctx: Floating_point_exprContext) => Result;

	/**
	 * Visit a parse tree produced by `MiniMoonBitParser.int_expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInt_expr?: (ctx: Int_exprContext) => Result;

	/**
	 * Visit a parse tree produced by `MiniMoonBitParser.not_expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNot_expr?: (ctx: Not_exprContext) => Result;

	/**
	 * Visit a parse tree produced by `MiniMoonBitParser.array_make_expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArray_make_expr?: (ctx: Array_make_exprContext) => Result;

	/**
	 * Visit a parse tree produced by `MiniMoonBitParser.identifier_expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier_expr?: (ctx: Identifier_exprContext) => Result;

	/**
	 * Visit a parse tree produced by `MiniMoonBitParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;

	/**
	 * Visit a parse tree produced by `MiniMoonBitParser.array_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArray_type?: (ctx: Array_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `MiniMoonBitParser.tuple_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTuple_type?: (ctx: Tuple_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `MiniMoonBitParser.function_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_type?: (ctx: Function_typeContext) => Result;
}

