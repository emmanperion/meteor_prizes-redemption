import { Prizes } from '../../imports/api/prizes'

export const prizeSeeder = function () {
    if (Prizes.find().count() === 0) {
        [
            {
                name: 'Flyaway',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse finibus sapien ut diam rutrum sagittis. Nunc consequat fermentum vulputate. Nunc erat eros, sollicitudin et tincidunt sollicitudin, sollicitudin vitae dolor. Donec lobortis elit et ipsum vulputate, eu rhoncus nunc blandit.',
                quantity: 21,
                imageUrl: '/assets/img/Item1.jpg'
            },
            {
                name: 'Walkaway',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse finibus sapien ut diam rutrum sagittis. Nunc consequat fermentum vulputate. Nunc erat eros, sollicitudin et tincidunt sollicitudin, sollicitudin vitae dolor. Donec lobortis elit et ipsum vulputate, eu rhoncus nunc blandit.',
                quantity: 24,
                imageUrl: '/assets/img/Item2.jpg'
            },
            {
                name: 'Crawl away',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse finibus sapien ut diam rutrum sagittis. Nunc consequat fermentum vulputate. Nunc erat eros, sollicitudin et tincidunt sollicitudin, sollicitudin vitae dolor. Donec lobortis elit et ipsum vulputate, eu rhoncus nunc blandit.',
                quantity: 26,
                imageUrl: '/assets/img/Item3.jpg'
            },
            {
                name: 'Strafe away',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse finibus sapien ut diam rutrum sagittis. Nunc consequat fermentum vulputate. Nunc erat eros, sollicitudin et tincidunt sollicitudin, sollicitudin vitae dolor. Donec lobortis elit et ipsum vulputate, eu rhoncus nunc blandit.',
                quantity: 21,
                imageUrl: '/assets/img/Item4.jpg'
            },
            {
                name: 'Jump away',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse finibus sapien ut diam rutrum sagittis. Nunc consequat fermentum vulputate. Nunc erat eros, sollicitudin et tincidunt sollicitudin, sollicitudin vitae dolor. Donec lobortis elit et ipsum vulputate, eu rhoncus nunc blandit.',
                quantity: 24,
                imageUrl: '/assets/img/Item5.jpg'
            },
            {
                name: 'Wave away',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse finibus sapien ut diam rutrum sagittis. Nunc consequat fermentum vulputate. Nunc erat eros, sollicitudin et tincidunt sollicitudin, sollicitudin vitae dolor. Donec lobortis elit et ipsum vulputate, eu rhoncus nunc blandit.',
                quantity: 26,
                imageUrl: '/assets/img/Item6.jpg'
            },
        ].forEach(function(prize){
            Prizes.insert(prize);
        });
    }
}
