export default async ({ github, context }) => {
    const labels = context.payload.pull_request.labels.map(label => label.name);
    console.log(`PR labels: ${labels}`);

    if (!labels.includes('QA') && !labels.includes('No-QA')) {
        throw new Error('The PR does not have QA or No-QA label.');
    } else {
        console.log('The PR has the required label.');
    }
};