// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.24/esri/copyright.txt for details.
//>>built
define("exports ./assert ./error-handler ./messages ./nodes ./scanner ./syntax ./token".split(" "),function(r,q,v,l,g,w,t,e){let y=function(){function u(a,b={},c){this.config={range:"boolean"===typeof b.range&&b.range,loc:"boolean"===typeof b.loc&&b.loc,source:null,tokens:"boolean"===typeof b.tokens&&b.tokens,comment:"boolean"===typeof b.comment&&b.comment,tolerant:"boolean"===typeof b.tolerant&&b.tolerant,globalReturn:!!b.globalReturn};this.config.loc&&b.source&&null!==b.source&&(this.config.source=
String(b.source));this.delegate=c;this.errorHandler=new v.ErrorHandler;this.errorHandler.tolerant=this.config.tolerant;this.scanner=new w.Scanner(a,this.errorHandler);this.scanner.trackComment=this.config.comment;this.operatorPrecedence={")":0,";":0,",":0,"\x3d":0,"]":0,"||":1,"\x26\x26":2,"|":3,"^":4,"\x26":5,"\x3d\x3d":6,"!\x3d":6,"\x3d\x3d\x3d":6,"!\x3d\x3d":6,"\x3c":7,"\x3e":7,"\x3c\x3d":7,"\x3e\x3d":7,"\x3c\x3c":8,"\x3e\x3e":8,"\x3e\x3e\x3e":8,"+":9,"-":9,"*":11,"/":11,"%":11};this.lookahead=
{type:e.TokenType.EOF,value:"",lineNumber:this.scanner.lineNumber,lineStart:0,start:0,end:0};this.hasLineTerminator=!1;this.context={allowIn:!0,firstCoverInitializedNameError:null,isAssignmentTarget:!1,isBindingElement:!1,inFunctionBody:!1,inIteration:!1,curlyParsing:"asObject"};this.tokens=[];this.startMarker={index:0,line:this.scanner.lineNumber,column:0};this.lastMarker={index:0,line:this.scanner.lineNumber,column:0};this.nextToken();this.lastMarker={index:this.scanner.index,line:this.scanner.lineNumber,
column:this.scanner.index-this.scanner.lineStart}}var d=u.prototype;d.tolerateError=function(a,...b){const c=b.slice();a=a.replace(/%(\d)/g,(f,h)=>{q.assert(h<c.length,"Message reference must be in range");return c[h]});this.errorHandler.tolerateError(this.lastMarker.index,this.scanner.lineNumber,this.lastMarker.column+1,a)};d.unexpectedTokenError=function(a,b){let c=b||l.Messages.UnexpectedToken;a?(b||(c=a.type===e.TokenType.EOF?l.Messages.UnexpectedEOS:a.type===e.TokenType.Identifier?l.Messages.UnexpectedIdentifier:
a.type===e.TokenType.NumericLiteral?l.Messages.UnexpectedNumber:a.type===e.TokenType.StringLiteral?l.Messages.UnexpectedString:a.type===e.TokenType.Template?l.Messages.UnexpectedTemplate:l.Messages.UnexpectedToken),b=a.value.toString()):b="ILLEGAL";c=c.replace("%0",b);return a&&"number"===typeof a.lineNumber?this.errorHandler.createError(a.start,a.lineNumber,a.start-(this.lastMarker.index-this.lastMarker.column)+1,c):this.errorHandler.createError(this.lastMarker.index,this.lastMarker.line,this.lastMarker.column+
1,c)};d.throwUnexpectedToken=function(a,b){throw this.unexpectedTokenError(a,b);};d.tolerateUnexpectedToken=function(a,b){this.errorHandler.tolerate(this.unexpectedTokenError(a,b))};d.collectComments=function(){if(this.config.comment){const a=this.scanner.scanComments();if(a&&0<a.length&&this.delegate)for(let b=0;b<a.length;++b){const c=a[b],f=new g.Comment(c.multiLine?"Block":"Line",this.scanner.source.slice(c.slice[0],c.slice[1]));this.config.range&&(f.range=c.range);this.config.loc&&(f.loc=c.loc);
this.delegate(f,{start:{line:c.loc.start.line,column:c.loc.start.column,offset:c.range[0]},end:{line:c.loc.end.line,column:c.loc.end.column,offset:c.range[1]}})}}else this.scanner.scanComments()};d.peekAhead=function(a){const b=this.scanner.saveState();a.call(this,()=>{this.scanner.scanComments();return this.scanner.lex()});this.scanner.restoreState(b)};d.getTokenRaw=function(a){return this.scanner.source.slice(a.start,a.end)};d.convertToken=function(a){const b={type:e.TokenName[a.type],value:this.getTokenRaw(a)};
this.config.range&&(b.range=[a.start,a.end]);this.config.loc&&(b.loc={start:{line:this.startMarker.line,column:this.startMarker.column},end:{line:this.scanner.lineNumber,column:this.scanner.index-this.scanner.lineStart}});a.type===e.TokenType.RegularExpression&&(b.regex={pattern:a.pattern,flags:a.flags});return b};d.nextToken=function(){const a=this.lookahead;this.lastMarker.index=this.scanner.index;this.lastMarker.line=this.scanner.lineNumber;this.lastMarker.column=this.scanner.index-this.scanner.lineStart;
this.collectComments();this.scanner.index!==this.startMarker.index&&(this.startMarker.index=this.scanner.index,this.startMarker.line=this.scanner.lineNumber,this.startMarker.column=this.scanner.index-this.scanner.lineStart);const b=this.scanner.lex();this.hasLineTerminator=a.lineNumber!==b.lineNumber;this.lookahead=b;this.config.tokens&&b.type!==e.TokenType.EOF&&this.tokens.push(this.convertToken(b));return a};d.createNode=function(){return{index:this.startMarker.index,line:this.startMarker.line,
column:this.startMarker.column}};d.startNode=function(a,b=0){let c=a.start-a.lineStart,f=a.lineNumber;0>c&&(c+=b,f--);return{index:a.start,line:f,column:c}};d.finalize=function(a,b){this.config.range&&(b.range=[a.index,this.lastMarker.index]);this.config.loc&&(b.loc={start:{line:a.line,column:a.column},end:{line:this.lastMarker.line,column:this.lastMarker.column}},this.config.source&&(b.loc.source=this.config.source));this.delegate&&this.delegate(b,{start:{line:a.line,column:a.column,offset:a.index},
end:{line:this.lastMarker.line,column:this.lastMarker.column,offset:this.lastMarker.index}});return b};d.expect=function(a){const b=this.nextToken();b.type===e.TokenType.Punctuator&&b.value===a||this.throwUnexpectedToken(b)};d.expectCommaSeparator=function(){if(this.config.tolerant){const a=this.lookahead;a.type===e.TokenType.Punctuator&&","===a.value?this.nextToken():a.type===e.TokenType.Punctuator&&";"===a.value?(this.nextToken(),this.tolerateUnexpectedToken(a)):this.tolerateUnexpectedToken(a,l.Messages.UnexpectedToken)}else this.expect(",")};
d.expectKeyword=function(a){const b=this.nextToken();b.type===e.TokenType.Keyword&&b.value.toString().toLowerCase()===a.toLowerCase()||this.throwUnexpectedToken(b)};d.match=function(a){return this.lookahead.type===e.TokenType.Punctuator&&this.lookahead.value===a};d.matchKeyword=function(a){return this.lookahead.type===e.TokenType.Keyword&&this.lookahead.value.toLowerCase()===a.toLowerCase()};d.matchContextualKeyword=function(a){return this.lookahead.type===e.TokenType.Identifier&&this.lookahead.value===
a};d.matchAssign=function(){return this.lookahead.type!==e.TokenType.Punctuator?!1:g.AssignmentOperators.includes(this.lookahead.value)};d.isolateCoverGrammar=function(a){const b=this.context.isBindingElement,c=this.context.isAssignmentTarget,f=this.context.firstCoverInitializedNameError;this.context.isBindingElement=!0;this.context.isAssignmentTarget=!0;this.context.firstCoverInitializedNameError=null;a=a.call(this);null!==this.context.firstCoverInitializedNameError&&this.throwUnexpectedToken(this.context.firstCoverInitializedNameError);
this.context.isBindingElement=b;this.context.isAssignmentTarget=c;this.context.firstCoverInitializedNameError=f;return a};d.inheritCoverGrammar=function(a){const b=this.context.isBindingElement,c=this.context.isAssignmentTarget,f=this.context.firstCoverInitializedNameError;this.context.isBindingElement=!0;this.context.isAssignmentTarget=!0;this.context.firstCoverInitializedNameError=null;a=a.call(this);this.context.isBindingElement=this.context.isBindingElement&&b;this.context.isAssignmentTarget=
this.context.isAssignmentTarget&&c;this.context.firstCoverInitializedNameError=f||this.context.firstCoverInitializedNameError;return a};d.consumeSemicolon=function(){this.match(";")?this.nextToken():this.hasLineTerminator||(this.lookahead.type===e.TokenType.EOF||this.match("}")||this.throwUnexpectedToken(this.lookahead),this.lastMarker.index=this.startMarker.index,this.lastMarker.line=this.startMarker.line,this.lastMarker.column=this.startMarker.column)};d.parsePrimaryExpression=function(){var a=
this.createNode();let b,c;switch(this.lookahead.type){case e.TokenType.Identifier:a=this.finalize(a,new g.Identifier(this.nextToken().value));break;case e.TokenType.NumericLiteral:case e.TokenType.StringLiteral:this.context.isAssignmentTarget=!1;this.context.isBindingElement=!1;b=this.nextToken();c=this.getTokenRaw(b);a=this.finalize(a,new g.Literal(b.value,c));break;case e.TokenType.BooleanLiteral:this.context.isAssignmentTarget=!1;this.context.isBindingElement=!1;b=this.nextToken();c=this.getTokenRaw(b);
a=this.finalize(a,new g.Literal("true"===b.value.toString().toLowerCase(),c));break;case e.TokenType.NullLiteral:this.context.isAssignmentTarget=!1;this.context.isBindingElement=!1;b=this.nextToken();c=this.getTokenRaw(b);a=this.finalize(a,new g.Literal(null,c));break;case e.TokenType.Template:a=this.parseTemplateLiteral();break;case e.TokenType.Punctuator:switch(this.lookahead.value){case "(":this.context.isBindingElement=!1;a=this.inheritCoverGrammar(this.parseGroupExpression);break;case "[":a=
this.inheritCoverGrammar(this.parseArrayInitializer);break;case "{":a=this.inheritCoverGrammar(this.parseObjectInitializer);break;default:a=this.throwUnexpectedToken(this.nextToken())}break;case e.TokenType.Keyword:this.context.isAssignmentTarget=!1;this.context.isBindingElement=!1;a=this.throwUnexpectedToken(this.nextToken());break;default:a=this.throwUnexpectedToken(this.nextToken())}return a};d.parseArrayInitializer=function(){const a=this.createNode(),b=[];for(this.expect("[");!this.match("]");)this.match(",")?
(this.nextToken(),b.push(null)):(b.push(this.inheritCoverGrammar(this.parseAssignmentExpression)),this.match("]")||this.expect(","));this.expect("]");return this.finalize(a,new g.ArrayExpression(b))};d.parseObjectPropertyKey=function(){var a=this.createNode();const b=this.nextToken();switch(b.type){case e.TokenType.StringLiteral:case e.TokenType.NumericLiteral:a=this.finalize(a,new g.Literal(b.value,this.getTokenRaw(b)));break;case e.TokenType.Identifier:case e.TokenType.BooleanLiteral:case e.TokenType.NullLiteral:case e.TokenType.Keyword:a=
this.finalize(a,new g.Identifier(b.value));break;default:a=this.throwUnexpectedToken(b)}return a};d.parseObjectProperty=function(){const a=this.createNode();var b=this.lookahead;let c=!1,f=!1;var h=null;b.type===e.TokenType.Identifier?(h=b.value,this.nextToken(),c=this.match("["),h=this.finalize(a,new g.Identifier(h))):this.match("*")?this.nextToken():(c=this.match("["),h=this.parseObjectPropertyKey());h||this.throwUnexpectedToken(this.lookahead);let k=null;this.match(":")?(this.nextToken(),k=this.inheritCoverGrammar(this.parseAssignmentExpression)):
b.type===e.TokenType.Identifier?(b=this.finalize(a,new g.Identifier(b.value)),f=!0,k=b):this.throwUnexpectedToken(this.nextToken());return this.finalize(a,new g.Property("init",h,c,k,!1,f))};d.parseObjectInitializer=function(){const a=this.createNode();this.expect("{");const b=[];for(;!this.match("}");)b.push(this.parseObjectProperty()),this.match("}")||this.expectCommaSeparator();this.expect("}");return this.finalize(a,new g.ObjectExpression(b))};d.parseTemplateHead=function(){q.assert(this.lookahead.head,
"Template literal must start with a template head");const a=this.createNode(),b=this.nextToken();return this.finalize(a,new g.TemplateElement({raw:b.value,cooked:b.cooked},b.tail))};d.parseTemplateElement=function(){this.lookahead.type!==e.TokenType.Template&&this.throwUnexpectedToken();const a=this.createNode(),b=this.nextToken();return this.finalize(a,new g.TemplateElement({raw:b.value,cooked:b.cooked},b.tail))};d.parseTemplateLiteral=function(){const a=this.createNode(),b=[],c=[];let f=this.parseTemplateHead();
for(c.push(f);!f.tail;)b.push(this.parseExpression()),f=this.parseTemplateElement(),c.push(f);return this.finalize(a,new g.TemplateLiteral(c,b))};d.parseGroupExpression=function(){this.expect("(");this.context.isBindingElement=!0;const a=this.inheritCoverGrammar(this.parseAssignmentExpression);this.expect(")");this.context.isBindingElement=!1;return a};d.parseArguments=function(){this.expect("(");const a=[];if(!this.match(")"))for(;;){const b=this.isolateCoverGrammar(this.parseAssignmentExpression);
a.push(b);if(this.match(")"))break;this.expectCommaSeparator();if(this.match(")"))break}this.expect(")");return a};d.isIdentifierName=function(a){return a.type===e.TokenType.Identifier||a.type===e.TokenType.Keyword||a.type===e.TokenType.BooleanLiteral||a.type===e.TokenType.NullLiteral};d.parseIdentifierName=function(){const a=this.createNode(),b=this.nextToken();this.isIdentifierName(b)||this.throwUnexpectedToken(b);return this.finalize(a,new g.Identifier(b.value))};d.parseLeftHandSideExpressionAllowCall=
function(){const a=this.lookahead,b=this.context.allowIn;this.context.allowIn=!0;let c=this.inheritCoverGrammar(this.parsePrimaryExpression);for(;;)if(this.match("(")){this.context.isBindingElement=!1;this.context.isAssignmentTarget=!1;var f=this.parseArguments();c=this.finalize(this.startNode(a),new g.CallExpression(c,f))}else if(this.match("["))this.context.isBindingElement=!1,this.context.isAssignmentTarget=!0,this.expect("["),f=this.isolateCoverGrammar(this.parseExpression),this.expect("]"),c=
this.finalize(this.startNode(a),new g.ComputedMemberExpression(c,f));else if(this.match("."))this.context.isBindingElement=!1,this.context.isAssignmentTarget=!0,this.expect("."),f=this.parseIdentifierName(),c=this.finalize(this.startNode(a),new g.StaticMemberExpression(c,f));else break;this.context.allowIn=b;return c};d.parseLeftHandSideExpression=function(){q.assert(this.context.allowIn,"callee of new expression always allow in keyword.");const a=this.startNode(this.lookahead);let b=this.inheritCoverGrammar(this.parsePrimaryExpression);
for(;;)if(this.match("[")){this.context.isBindingElement=!1;this.context.isAssignmentTarget=!0;this.expect("[");var c=this.isolateCoverGrammar(this.parseExpression);this.expect("]");b=this.finalize(a,new g.ComputedMemberExpression(b,c))}else if(this.match("."))this.context.isBindingElement=!1,this.context.isAssignmentTarget=!0,this.expect("."),c=this.parseIdentifierName(),b=this.finalize(a,new g.StaticMemberExpression(b,c));else break;return b};d.parseUpdateExpression=function(){let a;var b=this.lookahead;
if(this.match("++")||this.match("--")){b=this.startNode(b);var c=this.nextToken();a=this.inheritCoverGrammar(this.parseUnaryExpression);this.context.isAssignmentTarget||this.tolerateError(l.Messages.InvalidLHSInAssignment);a=this.finalize(b,new g.UpdateExpression(c.value,a,!0));this.context.isAssignmentTarget=!1;this.context.isBindingElement=!1}else a=this.inheritCoverGrammar(this.parseLeftHandSideExpressionAllowCall),this.hasLineTerminator||this.lookahead.type!==e.TokenType.Punctuator||!this.match("++")&&
!this.match("--")||(this.context.isAssignmentTarget||this.tolerateError(l.Messages.InvalidLHSInAssignment),this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1,c=this.nextToken().value,a=this.finalize(this.startNode(b),new g.UpdateExpression(c,a,!1)));return a};d.parseUnaryExpression=function(){let a;if(this.match("+")||this.match("-")||this.match("~")||this.match("!")){const b=this.startNode(this.lookahead),c=this.nextToken();a=this.inheritCoverGrammar(this.parseUnaryExpression);a=
this.finalize(b,new g.UnaryExpression(c.value,a));this.context.isAssignmentTarget=!1;this.context.isBindingElement=!1}else a=this.parseUpdateExpression();return a};d.binaryPrecedence=function(a){const b=a.value;return a.type===e.TokenType.Punctuator?this.operatorPrecedence[b]||0:a.type===e.TokenType.Keyword?this.context.allowIn&&"in"===b?12:0:0};d.parseBinaryExpression=function(){var a=this.lookahead,b=this.inheritCoverGrammar(this.parseUnaryExpression),c=this.lookahead,f=this.binaryPrecedence(c);
if(0<f){this.nextToken();this.context.isAssignmentTarget=!1;this.context.isBindingElement=!1;a=[a,this.lookahead];var h=this.inheritCoverGrammar(this.parseUnaryExpression);c=[b,c.value,h];for(var k=[f];;){f=this.binaryPrecedence(this.lookahead);if(0>=f)break;for(;2<c.length&&f<=k[k.length-1];){h=c.pop();const p=c.pop();k.pop();b=c.pop();a.pop();var m=a[a.length-1];m=this.startNode(m,m.lineStart);c.push(this.finalize(m,new g.BinaryExpression(p,b,h)))}c.push(this.nextToken().value);k.push(f);a.push(this.lookahead);
c.push(this.inheritCoverGrammar(this.parseUnaryExpression))}f=c.length-1;b=c[f];for(k=a.pop();1<f;){h=a.pop();if(!h)break;k=this.startNode(h,k&&k.lineStart);b=this.finalize(k,new g.BinaryExpression(c[f-1],c[f-2],b));f-=2;k=h}}return b};d.parseAssignmentExpression=function(){const a=this.lookahead;var b=a;let c=this.inheritCoverGrammar(this.parseBinaryExpression);if(this.matchAssign()){this.context.isAssignmentTarget||this.tolerateError(l.Messages.InvalidLHSInAssignment);this.match("\x3d")||(this.context.isAssignmentTarget=
!1,this.context.isBindingElement=!1);b=this.nextToken();b=b.value;const f=this.isolateCoverGrammar(this.parseAssignmentExpression);c=this.finalize(this.startNode(a),new g.AssignmentExpression(b,c,f));this.context.firstCoverInitializedNameError=null}return c};d.parseExpression=function(){return this.isolateCoverGrammar(this.parseAssignmentExpression)};d.parseStatementListItem=function(){let a;this.context.isAssignmentTarget=!0;this.context.isBindingElement=!0;if(this.lookahead.type===e.TokenType.Keyword)switch(this.lookahead.value){case "function":a=
this.parseFunctionDeclaration();break;default:a=this.parseStatement()}else a=this.parseStatement();return a};d.parseBlock=function(){const a=this.createNode();this.expect("{");const b=[];for(;!this.match("}");)b.push(this.parseStatementListItem());this.expect("}");return this.finalize(a,new g.BlockStatement(b))};d.parseObjectStatement=function(){const a=this.createNode(),b=this.parseObjectInitializer();return this.finalize(a,new g.ExpressionStatement(b))};d.parseBlockOrObjectStatement=function(){let a=
"asObject"===this.context.curlyParsing;"asObjectOrBlock"===this.context.curlyParsing&&this.peekAhead(b=>{let c=b();if(c.type===e.TokenType.Identifier||c.type===e.TokenType.StringLiteral)c=b(),c.type===e.TokenType.Punctuator&&":"===c.value&&(a=!0)});return a?this.parseObjectStatement():this.parseBlock()};d.parseVariableIdentifier=function(){const a=this.createNode(),b=this.nextToken();b.type!==e.TokenType.Identifier&&this.throwUnexpectedToken(b,l.Messages.IdentiferExpected);return this.finalize(a,
new g.Identifier(b.value))};d.parseVariableDeclaration=function(a){const b=this.createNode(),c=this.parseVariableIdentifier();let f=null;this.match("\x3d")?(this.nextToken(),f=this.isolateCoverGrammar(this.parseAssignmentExpression)):c.type===t.Syntax.Identifier||a.inFor||this.expect("\x3d");return this.finalize(b,new g.VariableDeclarator(c,f))};d.parseVariableDeclarationList=function(a){const b=[this.parseVariableDeclaration(a)];for(;this.match(",");)this.nextToken(),b.push(this.parseVariableDeclaration(a));
return b};d.parseVariableStatement=function(){const a=this.createNode();this.expectKeyword("var");const b=this.parseVariableDeclarationList({inFor:!1});this.consumeSemicolon();return this.finalize(a,new g.VariableDeclaration(b,"var"))};d.parseEmptyStatement=function(){const a=this.createNode();this.expect(";");return this.finalize(a,new g.EmptyStatement)};d.parseExpressionStatement=function(){const a=this.createNode(),b=this.parseExpression();this.consumeSemicolon();return this.finalize(a,new g.ExpressionStatement(b))};
d.parseIfClause=function(){const a=this.context.curlyParsing;this.context.curlyParsing="asObjectOrBlock";const b=this.parseStatement();this.context.curlyParsing=a;return b};d.parseIfStatement=function(){const a=this.createNode();let b,c=null;this.expectKeyword("if");this.expect("(");const f=this.parseExpression();!this.match(")")&&this.config.tolerant?(this.tolerateUnexpectedToken(this.nextToken()),b=this.finalize(this.createNode(),new g.EmptyStatement)):(this.expect(")"),b=this.parseIfClause(),this.matchKeyword("else")&&
(this.nextToken(),c=this.parseIfClause()));return this.finalize(a,new g.IfStatement(f,b,c))};d.parseForStatement=function(){let a=null,b=null,c=null,f=null,h=null;const k=this.createNode();this.expectKeyword("for");this.expect("(");if(this.match(";"))this.nextToken();else if(this.matchKeyword("var")){var m=this.createNode();this.nextToken();var p=this.context.allowIn;this.context.allowIn=!1;var n=this.parseVariableDeclarationList({inFor:!0});this.context.allowIn=p;1===n.length&&this.matchKeyword("in")?
(n[0].init&&this.tolerateError(l.Messages.ForInOfLoopInitializer,"for-in"),f=this.finalize(m,new g.VariableDeclaration(n,"var")),this.nextToken(),h=this.parseExpression()):(a=this.finalize(m,new g.VariableDeclaration(n,"var")),this.expect(";"))}else{m=this.context.isBindingElement;p=this.context.isAssignmentTarget;n=this.context.firstCoverInitializedNameError;const x=this.context.allowIn;this.context.allowIn=!1;a=this.inheritCoverGrammar(this.parseAssignmentExpression);this.context.allowIn=x;this.matchKeyword("in")?
(this.context.isAssignmentTarget&&a.type!==t.Syntax.AssignmentExpression||this.tolerateError(l.Messages.InvalidLHSInForIn),this.nextToken(),f=a,h=this.parseExpression(),a=null):(this.context.isBindingElement=m,this.context.isAssignmentTarget=p,this.context.firstCoverInitializedNameError=n,this.expect(";"))}f||(this.match(";")||(b=this.isolateCoverGrammar(this.parseExpression)),this.expect(";"),this.match(")")||(c=this.isolateCoverGrammar(this.parseExpression)));!this.match(")")&&this.config.tolerant?
(this.tolerateUnexpectedToken(this.nextToken()),m=this.finalize(this.createNode(),new g.EmptyStatement)):(this.expect(")"),p=this.context.inIteration,n=this.context.curlyParsing,this.context.inIteration=!0,this.context.curlyParsing="asObjectOrBlock",m=this.isolateCoverGrammar(this.parseStatement),this.context.curlyParsing=n,this.context.inIteration=p);return f&&h?this.finalize(k,new g.ForInStatement(f,h,m)):this.finalize(k,new g.ForStatement(a,b,c,m))};d.parseContinueStatement=function(){const a=
this.createNode();this.expectKeyword("continue");this.consumeSemicolon();return this.finalize(a,new g.ContinueStatement)};d.parseBreakStatement=function(){const a=this.createNode();this.expectKeyword("break");this.consumeSemicolon();return this.finalize(a,new g.BreakStatement)};d.parseReturnStatement=function(){this.config.globalReturn||this.context.inFunctionBody||this.tolerateError(l.Messages.IllegalReturn);const a=this.createNode();this.expectKeyword("return");const b=(this.match(";")||this.match("}")||
this.hasLineTerminator||this.lookahead.type===e.TokenType.EOF)&&this.lookahead.type!==e.TokenType.StringLiteral&&this.lookahead.type!==e.TokenType.Template?null:this.parseExpression();this.consumeSemicolon();return this.finalize(a,new g.ReturnStatement(b))};d.parseStatement=function(){switch(this.lookahead.type){case e.TokenType.BooleanLiteral:case e.TokenType.NullLiteral:case e.TokenType.NumericLiteral:case e.TokenType.StringLiteral:case e.TokenType.Template:case e.TokenType.Identifier:var a=this.parseExpressionStatement();
break;case e.TokenType.Punctuator:a=this.lookahead.value;a="{"===a?this.parseBlockOrObjectStatement():"("===a?this.parseExpressionStatement():";"===a?this.parseEmptyStatement():this.parseExpressionStatement();break;case e.TokenType.Keyword:switch(this.lookahead.value.toLowerCase()){case "break":a=this.parseBreakStatement();break;case "continue":a=this.parseContinueStatement();break;case "for":a=this.parseForStatement();break;case "function":a=this.parseFunctionDeclaration();break;case "if":a=this.parseIfStatement();
break;case "return":a=this.parseReturnStatement();break;case "var":a=this.parseVariableStatement();break;default:a=this.parseExpressionStatement()}break;default:a=this.throwUnexpectedToken(this.lookahead)}return a};d.parseFunctionSourceElements=function(){const a=this.createNode();this.expect("{");const b=this.context.inIteration,c=this.context.inFunctionBody;this.context.inIteration=!1;this.context.inFunctionBody=!0;const f=[];for(;this.lookahead.type!==e.TokenType.EOF&&!this.match("}");)f.push(this.parseStatementListItem());
this.expect("}");this.context.inIteration=b;this.context.inFunctionBody=c;return this.finalize(a,new g.BlockStatement(f))};d.parseFormalParameters=function(){const a=[];this.expect("(");if(!this.match(")"))for(;this.lookahead.type!==e.TokenType.EOF;){a.push(this.parseVariableIdentifier());if(this.match(")"))break;this.expect(",");if(this.match(")"))break}this.expect(")");return a};d.parseFunctionDeclaration=function(){const a=this.createNode();this.expectKeyword("function");const b=this.parseVariableIdentifier(),
c=this.parseFormalParameters(),f=this.parseFunctionSourceElements();return this.finalize(a,new g.FunctionDeclaration(b,c,f))};d.parseScript=function(){const a=this.createNode(),b=[];for(;this.lookahead.type!==e.TokenType.EOF;)b.push(this.parseStatementListItem());return this.finalize(a,new g.Program(b))};return u}();r.Parser=y;Object.defineProperties(r,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});