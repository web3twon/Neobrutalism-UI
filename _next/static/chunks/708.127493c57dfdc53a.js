"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[708],{9708:function(e,t,a){a.r(t),a.d(t,{default:function(){return components_GotchiBankingServices}});var n=a(5893),r=a(7294),o=a(1376),s=a(4476),d=a(7583),i=a(8470),l=a(9554),c=a(512),u=a(8388);function cn(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,u.m6)((0,c.W)(t))}let formatNumberWithCommas=e=>{if(!e)return"0";let[t,a]=e.split("."),n=t.replace(/\B(?=(\d{3})+(?!\d))/g,",");return a?"".concat(n,".").concat(a):n};var m=a(8532),p=a(250),components_TopSection=e=>{let{contractAddress:t,network:a,walletAddress:o,onConnectWallet:s,aavegotchis:d,customTokenSymbol:i,isCustomToken:l,tokenImage:c,isDarkMode:u,toggleDarkMode:b}=e,[h,k]=(0,r.useState)({show:!1,message:""}),copyToClipboard=e=>{navigator.clipboard.writeText(e).then(()=>{k({show:!0,message:"Copied to clipboard!"})}).catch(e=>{console.error("Failed to copy text: ",e),k({show:!0,message:"Failed to copy"})})};return(0,r.useEffect)(()=>{if(h.show){let e=setTimeout(()=>{k({show:!1,message:""})},3e3);return()=>clearTimeout(e)}},[h.show]),(0,n.jsxs)("div",{className:cn("space-y-4 relative"),children:[(0,n.jsx)("div",{className:"absolute top-4 right-4",children:(0,n.jsx)("button",{onClick:b,className:cn("p-2 rounded-full bg-main dark:bg-darkMain shadow-light hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"),"aria-label":"Toggle Dark Mode",children:u?(0,n.jsx)(m.Z,{className:"w-6 h-6 text-yellow-400"}):(0,n.jsx)(p.Z,{className:"w-6 h-6 text-gray-800"})})}),(0,n.jsx)("h1",{className:cn("text-4xl font-heading text-text dark:text-darkText"),children:"Aavegotchi Banking Services"}),(0,n.jsxs)("div",{className:cn("bg-main dark:bg-darkMain p-4 border-4 border-border dark:border-darkBorder shadow-light rounded"),children:[(0,n.jsxs)("p",{className:"font-base text-text dark:text-darkText",children:["Network: ",a]}),(0,n.jsxs)("p",{className:"font-base text-text dark:text-darkText",children:["Contract: ",t]})]}),(0,n.jsx)("div",{className:cn("bg-mainAccent dark:bg-darkMainAccent p-4 border-4 border-border dark:border-darkBorder shadow-light rounded"),children:o?(0,n.jsxs)("p",{className:"font-base text-text dark:text-darkText",children:["Connected: ",o.slice(0,6),"...",o.slice(-4)]}):(0,n.jsx)("button",{className:cn("bg-main dark:bg-darkMain px-4 py-2 font-base text-text dark:text-darkText border-4 border-border dark:border-darkBorder shadow-light hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all rounded"),onClick:s,children:"Connect Wallet"})}),(0,n.jsxs)("div",{className:cn("bg-main dark:bg-darkMain p-4 border-4 border-border dark:border-darkBorder shadow-light rounded"),children:[(0,n.jsx)("h2",{className:cn("text-2xl font-heading mb-4 text-text dark:text-darkText"),children:"Aavegotchi Tokens"}),(0,n.jsx)("div",{className:"overflow-x-auto",children:(0,n.jsxs)("table",{className:cn("w-full border-collapse border-4 border-border dark:border-darkBorder"),children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{className:"bg-mainAccent dark:bg-darkMainAccent",children:[(0,n.jsx)("th",{className:"border-4 border-border dark:border-darkBorder p-2 font-base text-text dark:text-darkText",children:"TOKEN ID"}),(0,n.jsx)("th",{className:"border-4 border-border dark:border-darkBorder p-2 font-base text-text dark:text-darkText",children:"NAME"}),(0,n.jsx)("th",{className:"border-4 border-border dark:border-darkBorder p-2 font-base text-text dark:text-darkText",children:"ESCROW WALLET"}),(0,n.jsxs)("th",{className:"border-4 border-border dark:border-darkBorder p-2 font-base text-text dark:text-darkText",children:[l&&i?i:"GHST"," BALANCE"]}),(0,n.jsx)("th",{className:"border-4 border-border dark:border-darkBorder p-2 font-base text-text dark:text-darkText",children:"OWNERSHIP"})]})}),(0,n.jsx)("tbody",{children:d.map((e,t)=>(0,n.jsxs)("tr",{className:t%2==0?"bg-bg dark:bg-darkBg":"bg-main dark:bg-darkMain",children:[(0,n.jsx)("td",{className:"border-4 border-border dark:border-darkBorder p-2 font-base text-text dark:text-darkText",children:e.tokenId}),(0,n.jsx)("td",{className:"border-4 border-border dark:border-darkBorder p-2 font-base text-text dark:text-darkText",children:e.name||"Aavegotchi #".concat(e.tokenId)}),(0,n.jsxs)("td",{className:"border-4 border-border dark:border-darkBorder p-2 font-base text-text dark:text-darkText",children:[e.escrowWallet.slice(0,6),"...",e.escrowWallet.slice(-4),(0,n.jsx)("button",{onClick:()=>copyToClipboard(e.escrowWallet),className:cn("ml-2 bg-mainAccent dark:bg-darkMainAccent px-2 py-1 font-base text-text dark:text-darkText border-2 border-border dark:border-darkBorder shadow-light hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all rounded"),children:"Copy"})]}),(0,n.jsx)("td",{className:"border-4 border-border dark:border-darkBorder p-2 font-base text-text dark:text-darkText",children:formatNumberWithCommas(parseFloat(l?e.customTokenBalance||"0":e.ghstBalance).toFixed(4))}),(0,n.jsx)("td",{className:"border-4 border-border dark:border-darkBorder p-2 font-base text-text dark:text-darkText",children:(0,n.jsx)("span",{className:cn("px-2 py-1 rounded",e.isLent?"bg-mainAccent dark:bg-darkMainAccent":"bg-main dark:bg-darkMain"),children:e.isLent?"\uD83D\uDD11 Rented":"\uD83C\uDFE0 Owned"})})]},e.tokenId))})]})})]}),h.show&&(0,n.jsx)("div",{className:cn("fixed bottom-4 right-4 bg-mainAccent dark:bg-darkMainAccent p-4 border-4 border-border dark:border-darkBorder shadow-light rounded"),children:(0,n.jsx)("p",{className:"font-base text-text dark:text-darkText",children:h.message})})]})},b=a(1126);let h="0x86935F11C86623deC8a25696E1C19a8659CbF95d",k="0x385Eeac5cB85A38A9a07A70c73e0a3271CfB54A7",g=[{inputs:[{internalType:"uint256",name:"_tokenId",type:"uint256"},{internalType:"address",name:"_erc20Contract",type:"address"},{internalType:"address",name:"_recipient",type:"address"},{internalType:"uint256",name:"_transferAmount",type:"uint256"}],name:"transferEscrow",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256[]",name:"_tokenIds",type:"uint256[]"},{internalType:"address[]",name:"_erc20Contracts",type:"address[]"},{internalType:"address[]",name:"_recipients",type:"address[]"},{internalType:"uint256[]",name:"_transferAmounts",type:"uint256[]"}],name:"batchTransferEscrow",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_owner",type:"address"}],name:"tokenIdsOfOwner",outputs:[{internalType:"uint32[]",name:"tokenIds_",type:"uint32[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint32[]",name:"_tokenIds",type:"uint32[]"}],name:"getAavegotchisBatch",outputs:[{components:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"string",name:"name",type:"string"},{internalType:"address",name:"owner",type:"address"},{internalType:"uint256",name:"randomNumber",type:"uint256"},{internalType:"uint256",name:"status",type:"uint256"},{internalType:"int16[6]",name:"numericTraits",type:"int16[6]"},{internalType:"int16[6]",name:"modifiedNumericTraits",type:"int16[6]"},{internalType:"uint16[16]",name:"equippedWearables",type:"uint16[16]"},{internalType:"address",name:"collateral",type:"address"},{internalType:"address",name:"escrow",type:"address"},{internalType:"uint256",name:"stakedAmount",type:"uint256"},{internalType:"uint256",name:"minimumStake",type:"uint256"},{internalType:"uint256",name:"kinship",type:"uint256"},{internalType:"uint256",name:"lastInteracted",type:"uint256"},{internalType:"uint256",name:"experience",type:"uint256"},{internalType:"uint256",name:"toNextLevel",type:"uint256"},{internalType:"uint256",name:"usedSkillPoints",type:"uint256"},{internalType:"uint256",name:"level",type:"uint256"},{internalType:"uint256",name:"hauntId",type:"uint256"},{internalType:"uint256",name:"baseRarityScore",type:"uint256"},{internalType:"uint256",name:"modifiedRarityScore",type:"uint256"},{internalType:"bool",name:"locked",type:"bool"},{internalType:"address",name:"lending",type:"address"}],internalType:"struct AavegotchiInfo[]",name:"aavegotchiInfos_",type:"tuple[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"balance",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_owner",type:"address"},{internalType:"uint256",name:"_index",type:"uint256"}],name:"tokenOfOwnerByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_tokenId",type:"uint256"}],name:"getAavegotchi",outputs:[{components:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"string",name:"name",type:"string"},{internalType:"address",name:"owner",type:"address"},{internalType:"uint256",name:"randomNumber",type:"uint256"},{internalType:"uint256",name:"status",type:"uint256"},{internalType:"int16[6]",name:"numericTraits",type:"int16[6]"},{internalType:"int16[6]",name:"modifiedNumericTraits",type:"int16[6]"},{internalType:"uint16[16]",name:"equippedWearables",type:"uint16[16]"},{internalType:"address",name:"collateral",type:"address"},{internalType:"address",name:"escrow",type:"address"},{internalType:"uint256",name:"stakedAmount",type:"uint256"},{internalType:"uint256",name:"minimumStake",type:"uint256"},{internalType:"uint256",name:"kinship",type:"uint256"},{internalType:"uint256",name:"lastInteracted",type:"uint256"},{internalType:"uint256",name:"experience",type:"uint256"},{internalType:"uint256",name:"toNextLevel",type:"uint256"},{internalType:"uint256",name:"usedSkillPoints",type:"uint256"},{internalType:"uint256",name:"level",type:"uint256"},{internalType:"uint256",name:"hauntId",type:"uint256"},{internalType:"uint256",name:"baseRarityScore",type:"uint256"},{internalType:"uint256",name:"modifiedRarityScore",type:"uint256"},{internalType:"bool",name:"locked",type:"bool"},{components:[{internalType:"address",name:"locked",type:"address"},{internalType:"uint96",name:"timeAgreed",type:"uint96"},{internalType:"address",name:"originalOwner",type:"address"}],internalType:"struct AavegotchiInfo.Lending",name:"lending",type:"tuple"}],internalType:"struct AavegotchiInfo.Aavegotchi",name:"aavegotchi_",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint32",name:"_erc721TokenId",type:"uint32"}],name:"isAavegotchiLent",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"}],y=[{constant:!0,inputs:[],name:"symbol",outputs:[{name:"",type:"string"}],type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{name:"",type:"uint8"}],type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"balanceOf",outputs:[{name:"balance",type:"uint256"}],type:"function"}];b.N;let x="0x385Eeac5cB85A38A9a07A70c73e0a3271CfB54A7";var components_WithdrawalForm=e=>{let{aavegotchis:t,onWithdraw:a,onCustomTokenChange:o,signer:s,onTokenSelection:c,tokenSymbol:u,onCustomTokenInvalid:m,tokenDecimals:p,isDarkMode:b}=e,[k,y]=(0,r.useState)([]),[w,f]=(0,r.useState)("GHST"),[T,v]=(0,r.useState)(""),[A,B]=(0,r.useState)(""),[N,S]=(0,r.useState)(!1),[j,C]=(0,r.useState)(null),I=t.filter(e=>!e.isLent);(0,r.useEffect)(()=>{0===k.length&&I.length>0&&y(I.map(e=>e.tokenId))},[I,k]);let handleSubmit=async e=>{if(e.preventDefault(),!s){console.error("Signer not initialized");return}S(!0),C(null);try{let e="GHST"===w?x:T,t=new d.CH(h,g,s),n=await s.getAddress(),r=I.filter(e=>k.includes(e.tokenId)),o=i.vz(A,p),l=r.length;if(0===l)throw Error("No Aavegotchis selected");let c=r.reduce((e,t)=>{let a="GHST"===w?t.ghstBalance:t.customTokenBalance||"0",n=i.vz(a,p);return e+n},BigInt(0));if(o>c){alert("Not enough balance in selected Aavegotchis to withdraw the total amount requested.");return}let u=[];if(o===c)u=r.map(e=>{let t="GHST"===w?e.ghstBalance:e.customTokenBalance||"0",a=i.vz(t,p);return{tokenId:BigInt(e.tokenId),amount:a}});else{let e=o/BigInt(l),t=o%BigInt(l);u=r.map(a=>{let n=e;t>BigInt(0)&&(n+=BigInt(1),t-=BigInt(1));let r="GHST"===w?a.ghstBalance:a.customTokenBalance||"0",o=i.vz(r,p);return n=n<o?n:o,{tokenId:BigInt(a.tokenId),amount:n}})}let m=u.reduce((e,t)=>e+t.amount,BigInt(0));if(m<o){alert("Not enough balance in selected Aavegotchis to withdraw the total amount requested.");return}console.log("Attempting batch withdrawal:"),u.forEach(e=>console.log("Aavegotchi ".concat(e.tokenId,": ").concat(i.bM(e.amount,p)))),await t.batchTransferEscrow(u.map(e=>e.tokenId),u.map(()=>e),u.map(()=>n),u.map(e=>e.amount)),B(""),await a(e,k,A)}catch(e){console.error("Error during withdrawal:",e),e instanceof Error?(console.log("Error message:",e.message),C("Transaction was cancelled or failed. Please try again.")):C("An unknown error occurred during withdrawal. Please try again.")}finally{S(!1)}};return(0,n.jsxs)("div",{className:cn("space-y-4"),children:[(0,n.jsx)("h2",{className:cn("text-2xl font-heading text-text dark:text-darkText"),children:"Withdraw"}),(0,n.jsxs)("form",{onSubmit:handleSubmit,className:"space-y-4",children:[(0,n.jsxs)("div",{className:cn("bg-main dark:bg-darkMain p-4 border-4 border-border dark:border-darkBorder shadow-light rounded"),children:[(0,n.jsx)("label",{className:"block font-base text-text dark:text-darkText mb-2",children:"Select Aavegotchi(s):"}),(0,n.jsxs)("select",{value:k.length>1?"all":k[0]||"all",onChange:e=>{let t=e.target.value;"all"===t?y(I.map(e=>e.tokenId)):y([t]),B("")},className:cn("w-full p-2 font-base text-text dark:text-darkText border-4 border-border dark:border-darkBorder shadow-light bg-bg dark:bg-darkBg rounded"),children:[(0,n.jsx)("option",{value:"all",children:"All Owned Aavegotchi"}),I.map(e=>(0,n.jsx)("option",{value:e.tokenId,children:e.name||"Aavegotchi #".concat(e.tokenId)},e.tokenId))]})]}),(0,n.jsxs)("div",{className:cn("bg-main dark:bg-darkMain p-4 border-4 border-border dark:border-darkBorder shadow-light rounded"),children:[(0,n.jsx)("label",{className:"block font-base text-text dark:text-darkText mb-2",children:"Token:"}),(0,n.jsxs)("select",{value:w,onChange:e=>{let t=e.target.value;f(t),c(t),"GHST"===t?v(x):"custom"===t&&v("")},className:cn("w-full p-2 font-base text-text dark:text-darkText border-4 border-border dark:border-darkBorder shadow-light bg-bg dark:bg-darkBg rounded"),children:[(0,n.jsx)("option",{value:"GHST",children:"GHST"}),(0,n.jsx)("option",{value:"custom",children:"Add your own token"})]})]}),"custom"===w&&(0,n.jsxs)("div",{className:cn("bg-main dark:bg-darkMain p-4 border-4 border-border dark:border-darkBorder shadow-light rounded"),children:[(0,n.jsx)("label",{className:"block font-base text-text dark:text-darkText mb-2",children:"Custom Token Address:"}),(0,n.jsx)("input",{type:"text",value:T,onChange:e=>{let t=e.target.value;v(t),l.UJ(t)?o(t):m()},placeholder:"Enter token address",className:cn("w-full p-2 font-base text-text dark:text-darkText border-4 border-border dark:border-darkBorder shadow-light bg-bg dark:bg-darkBg rounded")})]}),(0,n.jsxs)("div",{className:cn("bg-main dark:bg-darkMain p-4 border-4 border-border dark:border-darkBorder shadow-light rounded"),children:[(0,n.jsx)("label",{className:"block font-base text-text dark:text-darkText mb-2",children:"Amount:"}),(0,n.jsxs)("div",{className:"flex space-x-2",children:[(0,n.jsx)("input",{type:"number",value:A,onChange:e=>B(e.target.value),min:"0",step:"0.0001",required:!0,className:cn("flex-grow p-2 font-base text-text dark:text-darkText border-4 border-border dark:border-darkBorder shadow-light bg-bg dark:bg-darkBg rounded")}),(0,n.jsx)("button",{type:"button",onClick:()=>{let e=BigInt(0),t=I.filter(e=>k.includes(e.tokenId));e=t.reduce((e,t)=>{let a="GHST"===w?t.ghstBalance:t.customTokenBalance||"0";return e+i.vz(a,p)},BigInt(0));let a=i.bM(e,p);B(a),console.log("Max amount set: ".concat(a," for ").concat(k.length," Aavegotchi(s)"))},className:cn("bg-mainAccent dark:bg-darkMainAccent px-4 py-2 font-base text-text dark:text-darkText border-4 border-border dark:border-darkBorder shadow-light hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all rounded"),children:"Max"})]})]}),(0,n.jsx)("button",{type:"submit",disabled:N,className:cn("w-full bg-mainAccent dark:bg-darkMainAccent px-4 py-2 font-base text-text dark:text-darkText border-4 border-border dark:border-darkBorder shadow-light hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all rounded",{"opacity-50 cursor-not-allowed":N}),children:N?"Withdrawing...":"Withdraw"})]}),j&&(0,n.jsx)("div",{className:cn("bg-mainAccent dark:bg-darkMainAccent p-4 border-4 border-border dark:border-darkBorder shadow-light rounded"),children:(0,n.jsx)("p",{className:"font-base text-text dark:text-darkText",children:j})})]})},components_GotchiBankingServices=e=>{let{isDarkMode:t,toggleDarkMode:a}=e,[c,u]=(0,r.useState)(null),[m,p]=(0,r.useState)(null),[b,x]=(0,r.useState)(null),[w,f]=(0,r.useState)([]),[T,v]=(0,r.useState)(!1),[A,B]=(0,r.useState)("GHST"),[N,S]=(0,r.useState)(!1),[j,C]=(0,r.useState)(""),[I,M]=(0,r.useState)({symbol:"GHST",image:"/images/default-token.png"}),[E,_]=(0,r.useState)({}),[H,W]=(0,r.useState)("GHST"),[G,F]=(0,r.useState)(18),L=(0,r.useRef)(!0),O=(0,r.useCallback)(async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"polygon-pos",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"small";try{let n=await fetch("https://api.coingecko.com/api/v3/coins/".concat(t,"/contract/").concat(e.toLowerCase()));if(n.ok){let e=await n.json(),t=e.image||{};return t[a]||"/images/default-token.png"}if(404===n.status)return console.warn("Token not found. Using default image."),"/images/default-token.png";return console.error("Error: Received status code ".concat(n.status," from CoinGecko API.")),"/images/default-token.png"}catch(e){return console.error("An error occurred while fetching token image:",e),"/images/default-token.png"}},[]),D=(0,r.useCallback)(async e=>{try{let t;let a=await fetch("https://api.coingecko.com/api/v3/coins/polygon-pos/contract/".concat(e.toLowerCase()));if(!a.ok)throw Error("Failed to fetch token info");let n=await a.json(),r=await O(e),i=window.ethereum?new o.Q(window.ethereum):s.y(),l=new d.CH(e,y,b||i);try{t=await l.decimals()}catch(e){console.warn("Failed to fetch decimals, using 18 as default",e),t=18}F(t),M({symbol:n.symbol.toUpperCase(),image:r})}catch(e){console.error("Error fetching token info:",e),M({symbol:"Unknown",image:"/images/default-token.png"}),F(18)}},[O,b]);(0,r.useEffect)(()=>{D(k)},[D]);let P=(0,r.useCallback)(async()=>{if(window.ethereum)try{let e=new o.Q(window.ethereum),t=await e.getNetwork();v(t.chainId===BigInt(137));let a=await e.listAccounts();if(a.length>0){let t=await e.getSigner(),a=await t.getAddress();u(a),x(t);let n=new d.CH(h,g,t);p(n),fetchAavegotchis(a,n)}else u(null),x(null),p(null),f([])}catch(e){console.error("Error checking connection:",e)}},[]);(0,r.useEffect)(()=>(P(),window.ethereum&&(window.ethereum.on("accountsChanged",P),window.ethereum.on("chainChanged",P)),()=>{window.ethereum&&(window.ethereum.removeListener("accountsChanged",P),window.ethereum.removeListener("chainChanged",P))}),[P]);let connectWallet=async()=>{if(window.ethereum)try{await window.ethereum.request({method:"eth_requestAccounts"}),P()}catch(e){console.error("Error connecting wallet:",e)}else alert("Please install MetaMask or another Ethereum wallet to use this dApp.")},fetchAavegotchis=async(e,t)=>{try{console.log("Fetching Aavegotchis for address:",e);let a=await t.balanceOf(e);console.log("Balance:",a.toString());let n=[];for(let r=0;r<a;r++){let a=await t.tokenOfOwnerByIndex(e,r);console.log("Token ID ".concat(r,":"),a.toString()),n.push(a.toString())}let r=t.runner,o=new d.CH(k,y,r),s=await o.decimals(),l=await Promise.all(n.map(async e=>{let a=await t.getAavegotchi(e),n=a.escrow,r=await o.balanceOf(n),d=await t.isAavegotchiLent(e);return{tokenId:e,name:a.name,escrowWallet:n,ghstBalance:i.bM(r,s),isLent:d}}));console.log("Processed Aavegotchi Data:",l),f(l)}catch(e){console.error("Error fetching Aavegotchis:",e),f([])}},R=(0,r.useCallback)(async e=>{if(!m||!b||!e||!l.UJ(e)){M({symbol:"",image:"/images/default-token.png"}),"GHST"!==H?S(!0):S(!1);return}if(e.toLowerCase()===k.toLowerCase()){S(!1),M({symbol:"GHST",image:"/images/default-token.png"}),F(18);return}try{let t,a;await D(e),console.log("Creating token contract instance for address:",e);let n=new d.CH(e,y,b);console.log("Fetching token symbol...");try{t=await n.symbol()}catch(a){console.warn("Failed to fetch symbol, using address as symbol",a),t=e.slice(0,6)+"..."}B(t),console.log("Fetching token decimals...");try{a=await n.decimals()}catch(e){console.warn("Failed to fetch decimals, using 18 as default",e),a=18}F(a),console.log("Updating Aavegotchi balances...");let r={};await Promise.all(w.map(async e=>{let t;try{t=await n.balanceOf(e.escrowWallet),r[e.tokenId]=i.bM(t,a)}catch(t){console.warn("Failed to fetch balance for Aavegotchi ".concat(e.tokenId),t),r[e.tokenId]="0"}})),_(r),S(!0)}catch(e){console.error("Error fetching custom token info:",e),B(""),M({symbol:"",image:"/images/default-token.png"}),S(!1),F(18)}},[m,b,w,D,H]),q=(0,r.useCallback)(()=>{M({symbol:"",image:"/images/default-token.png"}),S(!1),F(18)},[]),z=(0,r.useCallback)(async(e,t,a)=>{if(!m||!b){console.error("Contract or signer not initialized");return}try{await fetchAavegotchis(await b.getAddress(),m),console.log("Withdrawn ".concat(a," of token ").concat(e," from Aavegotchis:"),t)}catch(e){console.error("Error during withdrawal:",e)}},[m,b]),U=(0,r.useCallback)(e=>{W(e),"GHST"===e?(S(!1),C(k),M({symbol:"GHST",image:"/images/default-token.png"}),F(18),R(k)):"custom"===e&&(S(!0),C(""),M({symbol:"",image:"/images/default-token.png"}))},[R]),J={aavegotchis:w,onWithdraw:z,onCustomTokenChange:R,signer:b,onTokenSelection:U,tokenSymbol:I.symbol,onCustomTokenInvalid:q,tokenDecimals:G,isDarkMode:t};return(0,r.useEffect)(()=>{if(L.current){L.current=!1;return}if(m&&b){let fetchBalances=async()=>{let e=await Promise.all(w.map(async e=>{let t=e.ghstBalance,a=e.customTokenBalance||"0";if("GHST"!==H&&N)a=E[e.tokenId]||"0";else try{let a=new d.CH(k,y,b),n=await a.balanceOf(e.escrowWallet);t=i.bM(n,18)}catch(a){console.warn("Failed to fetch GHST balance for Aavegotchi ".concat(e.tokenId),a),t="0"}return{...e,ghstBalance:t,customTokenBalance:a}}));f(e)};fetchBalances()}},[m,b,E,N,H,w]),(0,n.jsxs)("div",{className:cn("min-h-screen p-6",t?"bg-darkBg text-darkText":"bg-bg text-text"),children:[(0,n.jsx)(components_TopSection,{contractAddress:h,network:"Polygon Mainnet",walletAddress:c,onConnectWallet:connectWallet,aavegotchis:w,customTokenSymbol:A,isCustomToken:N,tokenImage:I.image,isDarkMode:t,toggleDarkMode:a}),(0,n.jsx)(components_WithdrawalForm,{...J})]})}}}]);