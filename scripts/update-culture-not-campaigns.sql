DELETE FROM public.articles
WHERE slug = 'culture-not-campaigns-why-loyalty-adoption-is-a-change-manag'
  AND image IS NULL
  AND COALESCE(content, '') = '';

UPDATE public.articles
SET status = 'Published'
WHERE slug IN (
  'loyalty-that-earns-its-keep',
  'data-before-design',
  'the-case-for-an-audit'
)
  AND status = 'published';

UPDATE public.articles
SET
  title = 'Culture, Not Campaigns: Why Loyalty Adoption Is a Change-Management Problem',
  excerpt = 'Most loyalty programmes are measured as marketing outcomes, but adoption is a behaviour-change problem. When organisations move to a new programme, culture is often the variable that determines whether the change sticks — and the asymmetry between head-office dissatisfaction and frontline cost of change is a warning sign for any loyalty transition.',
  content = 'Most loyalty programmes are measured as marketing programmes: enrolments, active members, transaction frequency and redemption rates.

When those numbers disappoint, the response is usually more marketing — a bigger launch push, a sharper incentive, more communications or a redesigned app.

I''d argue that often, we''re solving the wrong problem.

Adoption isn''t simply a marketing outcome. It''s a behaviour-change outcome.

And particularly when an organisation is moving from one loyalty programme to another, the variable that determines whether that change sticks is often organisational culture.

There Are Two Adoptions

Every loyalty programme has to be adopted twice.

The first is customer adoption: people sign up, use the programme, earn and redeem.

The second is internal adoption: the people delivering the programme — at the till, on the floor, in customer service and in the back office — make it part of how they work.

The first is measured constantly. The second is often overlooked.

Yet a customer cannot join a programme they are never offered. A member cannot earn points if the transaction isn''t captured. A benefit cannot create value if nobody explains it.

So when enrolment is flat, perhaps the first question shouldn''t be:

''Was the offer compelling enough?''

It should be:

''Was the programme actually offered?''

Culture Is the Operative Variable

Edgar Schein''s work on organisational culture is useful here. He describes culture through visible artefacts, espoused values and the underlying assumptions that actually shape behaviour.

A loyalty programme touches all three.

The artefacts are the scripts, POS prompts, posters, QR codes and training materials.

The espoused value is usually something like: we put the customer relationship first.

But the underlying assumption — particularly when the shift is busy and the queue is long — might be:

The job at the till is to process the transaction quickly and move on.

When the visible process and the underlying assumption disagree, the assumption usually wins.

That is why a programme can launch with training, signage and a carefully designed script, yet still fail to become part of everyday behaviour.

The problem isn''t necessarily that people refused to adopt it.

The new behaviour simply never displaced the old one.

The Frontline Is Part of the Loyalty Product

Customers don''t experience a loyalty strategy through its business case or technology platform.

They experience it through people.

The person who asks whether they''re a member.

The person who explains the benefit.

The person who scans the transaction.

The person who resolves the problem when the points don''t appear.

The frontline isn''t simply a distribution channel for loyalty.

It is part of the loyalty product.

If the organisation hasn''t adopted the behaviours required to deliver the programme, the customer experience will expose that gap quickly.

Transitions Are the Hard Case

This becomes even more important when an organisation replaces an existing loyalty programme.

A new programme launching into a vacuum only has to beat nothing.

A programme replacing an old one has to beat something already installed.

However imperfect the old programme was, people had learned its shortcuts and workarounds. They knew how to operate within it.

The replacement doesn''t just have to be better.

It has to be better by enough to justify unlearning.

This is where change management becomes critical.

Head office may be deeply dissatisfied with the old programme. The person at the till may not be. From their perspective, the old system may have been perfectly manageable, while the new one introduces unfamiliar steps or additional effort.

The result is an important asymmetry:

The dissatisfaction sits at the top, while the cost of change sits at the frontline.

That is a warning sign for any loyalty transition.

What This Changes in Practice

If loyalty adoption is a change-management problem, it needs to be managed as one.

Diagnose before you digitise.

Understand what frontline teams believe their role is and where loyalty fits into that role before choosing the technology or designing the process.

Design for behaviour, not just process.

A script or POS prompt changes the visible process. It doesn''t necessarily change behaviour. The desired behaviour needs to be easy, useful and repeatable.

Measure internal adoption.

Track leading indicators such as staff participation, offer rates, transaction scans, training completion and outlet-level adoption — not just customer enrolment and redemption.

Use incentives to start behaviour, not sustain it forever.

Incentives can create an initial reason to act. But lasting adoption comes when the behaviour becomes part of the organisational norm.

Technology Still Matters

None of this makes technology irrelevant.

A poor platform can fail on its own merits. Slow apps, broken scanners and complicated redemption journeys will undermine even the strongest programme.

But the reverse is also true.

A good platform dropped into a culture that hasn''t adopted the behaviour around it can fail just as reliably.

And often, the organisation responds by spending more on marketing, incentives and communications — because the real problem has been misdiagnosed.

The launch is not the adoption.

The campaign is not the culture.

Adoption isn''t a campaign. It''s a change you have to manage.',
  category = 'Loyalty',
  status = 'Published',
  image = '/images/blog-4.jpg',
  tags = ARRAY['Loyalty', 'Change Management', 'Culture'],
  reading_time = '11 min read',
  updated_at = now()
WHERE slug = 'culture-not-campaigns';

-- Confirm that exactly one article was updated and the final section is present.
SELECT id, slug, status, length(content) AS content_length
FROM public.articles
WHERE slug = 'culture-not-campaigns';