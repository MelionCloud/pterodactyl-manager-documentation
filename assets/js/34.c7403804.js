(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{214:function(t,a,s){"use strict";s.r(a);var e=s(31),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"debian-10"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#debian-10"}},[t._v("#")]),t._v(" Debian 10")]),t._v(" "),s("p",[t._v("In this guide we will install Pterodactyl's Daemon 0.6.X — including all of it's dependencies — and configure it\nto use a SSL connection.")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#install-requirements"}},[t._v("Install Requirements")]),s("ul",[s("li",[s("a",{attrs:{href:"#general-requirements"}},[t._v("General Requirements")])]),s("li",[s("a",{attrs:{href:"#docker"}},[t._v("Docker")])]),s("li",[s("a",{attrs:{href:"#nodejs"}},[t._v("Nodejs")])])])]),s("li",[s("a",{attrs:{href:"#installing-the-daemon"}},[t._v("Installing the Daemon")])])])]),s("p"),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("This guide is based off the "),s("RouterLink",{attrs:{to:"/daemon/installing.html"}},[t._v("official installation documentation")]),t._v(" but is tailored specifically for Debian 10.")],1)]),t._v(" "),s("h2",{attrs:{id:"install-requirements"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-requirements"}},[t._v("#")]),t._v(" Install Requirements")]),t._v(" "),s("p",[t._v("We will first begin by installing all of the Daemon's "),s("RouterLink",{attrs:{to:"/daemon/installing.html#dependencies"}},[t._v("required")]),t._v(" dependencies.")],1),t._v(" "),s("h3",{attrs:{id:"general-requirements"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#general-requirements"}},[t._v("#")]),t._v(" General Requirements")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("zip")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("unzip")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" gcc g++ python python-dev "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" gnupg\n")])])]),s("h3",{attrs:{id:"docker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[t._v("#")]),t._v(" Docker")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## install apt tools")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y apt-transport-https ca-certificates "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" gnupg2 software-properties-common\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Import the docker gpg key")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -fsSL https://download.docker.com/linux/debian/gpg "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" apt-key "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Add the docker stable repo")]),t._v("\nadd-apt-repository "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"deb [arch=amd64] https://download.docker.com/linux/debian '),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("lsb_release -cs"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v(' stable"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Install docker")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" update -y\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y docker-ce\n\nsystemctl "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" docker\nsystemctl start docker\n")])])]),s("h3",{attrs:{id:"nodejs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nodejs"}},[t._v("#")]),t._v(" Nodejs")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Install nodejs repo")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -sL https://deb.nodesource.com/setup_10.x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v(" -\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Install nodejs")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y nodejs\n")])])]),s("h2",{attrs:{id:"installing-the-daemon"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installing-the-daemon"}},[t._v("#")]),t._v(" Installing the Daemon")]),t._v(" "),s("p",[t._v("Great, now all of the dependencies have been dealt with. From here follow the "),s("RouterLink",{attrs:{to:"/daemon/installing.html#installing-daemon-software"}},[t._v("official Daemon installation documentation")]),t._v(".")],1)])}),[],!1,null,null,null);a.default=n.exports}}]);