import{A as w}from"./AppLayout.42176e43.js";import F from"./DeleteUserForm.74c9f09b.js";import{J as y}from"./SectionBorder.4a5f2a23.js";import $ from"./LogoutOtherBrowserSessionsForm.bb0e3299.js";import k from"./TwoFactorAuthenticationForm.11a10f31.js";import v from"./UpdatePasswordForm.ba015ffa.js";import P from"./UpdateProfileInformationForm.bcb3b197.js";import b from"./UpdateNotificationPreferencesForm.4e87c9ed.js";import{_ as j,p as t,o as s,c as B,w as m,a as n,t as U,b as o,d as a,e as p,F as x}from"./app.9990b681.js";import"./ActionSection.04f5b31f.js";import"./SectionTitle.f4045d4e.js";import"./DialogModal.e35bb2df.js";import"./Modal.6f57b9a1.js";import"./DangerButton.a6d441d7.js";import"./Input.cc3a6b03.js";import"./InputError.f375234f.js";import"./SecondaryButton.7072b609.js";import"./ActionMessage.20792ca8.js";import"./Button.da556acd.js";import"./FormSection.3f865b45.js";import"./XInput.bb938d8a.js";import"./PasswordStrengthMeter.6dd674eb.js";import"./Label.2f512a6c.js";import"./index.es.ad5fc14a.js";import"./XCheckbox.6f251e09.js";import"./XSelect.383aee2d.js";import"./XTextarea.af9a9f9c.js";const A={components:{UpdateNotificationPreferencesForm:b,AppLayout:w,DeleteUserForm:F,JetSectionBorder:y,LogoutOtherBrowserSessionsForm:$,TwoFactorAuthenticationForm:k,UpdatePasswordForm:v,UpdateProfileInformationForm:P},props:["sessions"]},S={class:"font-semibold text-xl text-gray-800 leading-tight"},N={class:"max-w-7xl mx-auto py-10 px-2 sm:px-6 lg:px-8"},C={key:0},D={key:1},V={key:2};function I(e,J,i,L,T,E){const c=t("app-head"),_=t("update-profile-information-form"),r=t("jet-section-border"),l=t("update-notification-preferences-form"),f=t("update-password-form"),d=t("two-factor-authentication-form"),u=t("logout-other-browser-sessions-form"),h=t("delete-user-form"),g=t("app-layout");return s(),B(g,null,{header:m(()=>[n("h2",S,U(e.__("Profile")),1)]),default:m(()=>[o(c,{title:e.__("Your Profile Settings")},null,8,["title"]),n("div",null,[n("div",N,[e.$page.props.jetstream.canUpdateProfileInformation?(s(),a("div",C,[o(_,{user:e.$page.props.user},null,8,["user"]),o(r)])):p("",!0),n("div",null,[o(l,{user:e.$page.props.user},null,8,["user"]),o(r)]),e.$page.props.jetstream.canUpdatePassword?(s(),a("div",D,[o(f,{class:"mt-10 sm:mt-0"}),o(r)])):p("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(s(),a("div",V,[o(d,{class:"mt-10 sm:mt-0"}),o(r)])):p("",!0),o(u,{sessions:i.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(s(),a(x,{key:3},[o(r),o(h,{class:"mt-10 sm:mt-0"})],64)):p("",!0)])])]),_:1})}const uo=j(A,[["render",I]]);export{uo as default};