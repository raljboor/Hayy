# Hayy Premium Frontend

A full clickable React/Vite frontend prototype for Hayy.

## Included

Public:
- Landing page
- Login
- Signup
- Onboarding

App:
- Dashboard
- Rooms listing
- Room detail
- Live room interface
- Referrals
- Profile
- Referral host dashboard
- Recruiter dashboard
- Settings

## Run locally

```bash
npm install
npm run dev
```

Then open the local Vite URL.

## Notes

This is frontend-only. All routing is handled with React state for easy previewing. Next steps:
- Add React Router
- Connect Supabase/Auth
- Connect Supabase or PostgreSQL for users, rooms, referrals
- Add LiveKit/Daily/Agora/Twilio for live rooms
- Add Resend/Postmark for notifications
