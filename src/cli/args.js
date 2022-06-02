export const parseArgs = () => {
    const { argv } = process;
    const args = argv.slice(2);
    args.forEach((el, index) => {
        if (el.startsWith('--')) {
            console.log(`${el.slice(2)} is ${args[index + 1]}`);
        }
    });
};
parseArgs();